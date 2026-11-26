export const USERS={tech:'林亦舟（技师）',planner:'唐映秋（计划员）',dispatch:'叶书（调度）',safety:'傅景（安全）',manager:'顾明岚（经理）'};
export const STATES=['待核对','待交接','待接手','处理中','已闭环'];
const txt=(v,label,max=1000)=>{if(typeof v!=='string'||!v.trim()||v.length>max)throw Error(label+'不能为空或超过长度限制');return v.trim();};
const user=id=>{if(!Object.hasOwn(USERS,id))throw Error('请选择演示操作者');return id;};
const time=v=>{const n=Date.parse(v);if(!Number.isFinite(n))throw Error('时间格式无效');return n;};
const stamp=(actor,action,detail,at)=>({actor:user(actor),action,detail,at:new Date(time(at)).toISOString()});
const forbidden=/解除.{0,3}(联锁|保护)|远程.{0,3}(启停|控制)|自动.{0,3}(维修|复产|开机)|绕过.{0,3}(审核|安全)/;
export function normalizeSymptom(value){const s=txt(value,'点检描述',500);return /轴承.*响|运转杂音|异响/.test(s)?'设备异响':/温度|过热/.test(s)?'温度异常':/振动|震动/.test(s)?'振动异常':s;}
export function fixtures(now=new Date().toISOString()){return [
 {id:'MANUAL-M01-v1',device:'M-01',version:'v1',at:now,excerpt:'合成手册：异响需现场检查并保留原记录。停止、拆检和复产由授权人员按既有流程决定。'},
 {id:'TREND-M02-v1',device:'M-02',version:'v1',at:now,excerpt:'合成趋势：报警可能包含传感器漂移；需现场核验设备本体，不直接据此换件。'},
 {id:'CONFLICT-M01-v0',device:'M-01',version:'v0（冲突样本）',at:now,conflict:true,excerpt:'合成旧版资料：当前适用版本未确认，禁止直接生成处置结论。'}
 ];}
export function assess(input,sources,now){
 const reasons=[];const source=sources.find(s=>s.id===input.sourceId);
 if(!source)reasons.push('缺少可定位来源');
 else{if(source.device!==input.device)reasons.push('来源设备不匹配');if(source.conflict)reasons.push('来源版本冲突');const age=time(now)-time(source.at);if(age<0||age>15*60*1000)reasons.push('来源超过15分钟或时标异常');}
 if(input.drift)reasons.push('传感器漂移需人工核实');
 return {source:source?{id:source.id,device:source.device,version:source.version,at:source.at,excerpt:source.excerpt}:null,reasons};
}
export function createTask(input,existing,sources,now=new Date().toISOString()){
 const id=txt(input.id,'业务编号',60);if(!/^[A-Za-z0-9_-]+$/.test(id))throw Error('业务编号仅允许字母、数字、短横线和下划线');
 if(existing.some(t=>t.id===id))throw Error('业务编号已存在，不重复创建');
 const actor=user(input.actor),device=txt(input.device,'设备编号',40),symptom=txt(input.symptom,'点检描述',500);
 if(forbidden.test(symptom))throw Error('该请求含设备控制或越界动作，仅接受只读点检与人工交接');
 if(!['M-01','M-02'].includes(device))throw Error('设备不在本次合成范围');
 const a=assess({...input,device},sources,now);
 return {id,device,originalSymptom:symptom,symptom:normalizeSymptom(symptom),author:actor,status:a.reasons.length?'待核对':'待交接',source:a.source,reviewReasons:a.reasons,reviewNote:'',recipient:null,handoffNote:'',closure:null,createdAt:now,audit:[stamp(actor,'创建点检',a.reasons.join('；')||'来源与版本核对通过；仅生成草稿',now)]};
}
export function transition(task,action,actor,payload={},sources=[],now=new Date().toISOString()){
 user(actor);const t=structuredClone(task);let detail='';
 if(action==='review'){
  if(t.status!=='待核对'||!['planner','safety','manager'].includes(actor))throw Error('仅演示复核岗位可处理待核对记录');
  const note=txt(payload.note,'人工核对依据',1000);const a=assess({device:t.device,sourceId:payload.sourceId,drift:false},sources,now);
  if(a.reasons.length)throw Error(a.reasons.join('；'));
  t.source=a.source;t.reviewNote=note;t.reviewReasons=[];t.status='待交接';detail='人工复核：'+note;
 }else if(action==='handoff'){
  if(t.status!=='待交接'||!['planner','manager'].includes(actor))throw Error('仅计划员或经理可发起待交接任务');
  const a=assess({device:t.device,sourceId:t.source?.id},[t.source].filter(Boolean),now);if(a.reasons.length)throw Error('交接前来源已过期，请先退回核对');
  t.recipient=user(payload.recipient);if(t.recipient===actor)throw Error('接手人不能是交出人');
  t.handoffNote=txt(payload.note,'交接说明与未解项',1000);t.status='待接手';detail='待接手人：'+USERS[t.recipient]+'；'+t.handoffNote;
 }else if(action==='accept'){
  if(t.status!=='待接手'||actor!==t.recipient)throw Error('必须由指定接手人确认，发送消息不等于交接完成');
  t.status='处理中';detail='指定接手人确认，责任从本次确认起转移';
 }else if(action==='return'){
  if(t.status==='已闭环'||!(actor===t.recipient||actor==='planner'||actor==='manager'||actor==='safety'))throw Error('当前岗位不能退回此任务');
  detail=txt(payload.note,'退回原因',1000);t.status='待核对';t.reviewReasons=[detail];t.recipient=null;
 }else if(action==='close'){
  if(t.status!=='处理中'||actor!==t.recipient)throw Error('只有已确认接手的操作者可记录闭环');
  if(payload.safetyConfirmed!==true)throw Error('需记录授权人员已完成现场安全确认；本系统不批准复产');
  const repaired=time(payload.repairedAt),stable=time(payload.stableAt);
  if(repaired<time(t.createdAt)||stable<repaired||stable>time(now))throw Error('需满足创建≤修好≤稳定复产≤当前时间');
  const note=txt(payload.note,'闭环证据与未解项处理',1000),signer=txt(payload.signer,'现场授权确认人',80);
  t.closure={repairedAt:new Date(repaired).toISOString(),stableAt:new Date(stable).toISOString(),note,signer,safetyConfirmed:true};t.status='已闭环';detail='人工结果记录：'+note+'；现场确认人：'+signer;
 }else throw Error('未知动作');
 t.audit.push(stamp(actor,action,detail,now));return t;
}
export function validateState(s){
 if(!s||s.schema!==1||!Array.isArray(s.tasks)||s.tasks.length>500||!Array.isArray(s.sources))throw Error('本地数据格式无效，请先导出原存储或清空演示数据');
 const ids=new Set();for(const t of s.tasks){if(!t||typeof t.id!=='string'||ids.has(t.id)||!STATES.includes(t.status)||!Array.isArray(t.audit))throw Error('本地任务数据损坏');ids.add(t.id);}return s;
}
