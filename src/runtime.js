// Portable, deterministic demo orchestration. Synthetic fixtures; no production writes or LLM calls.
export const demoProducts = {
 calder:{name:'卡尔德保险',product:'报案协同智能体',subtitle:'从分散材料，到可审核的服务交接',icon:'C',accent:'#9b6738',record:'CLM-DEMO-017',recordLabel:'报案案件',user:'理赔经办人',request:'检查这笔报案的材料，给出分流建议和待审核沟通草稿。',objects:['报案案件','材料清单','检查规则','分流建议','审核记录'],agents:['材料核对智能体','案件分流智能体','沟通起草智能体'],outcome:'一屏查看缺项、来源、分流建议和人工复核事项',boundary:'不核赔、不自动对外发送、不代替审核',source:'CALDER-DEMO-MATERIALS@v1',rows:[['案件编号','CLM-DEMO-017'],['险种','企业财产险 · 合成报案'],['附件','报案表、现场照片、损失清单'],['接收时间','2026-10-17 09:30'],['处理范围','材料检查与建议草稿']]},
 helix:{name:'赫利克斯资本',product:'研究引用智能体',subtitle:'每一个研究数字，都能回到原文',icon:'H',accent:'#4769a0',record:'RPT-DEMO-024',recordLabel:'研究资料',user:'授权研究员',request:'核对本期与上期收入，生成有来源的研究摘录，交分析师复核。',objects:['授权财报','原文片段','研究指标','笔记草稿','审核记录'],agents:['资料定位智能体','指标核验智能体','研究起草智能体'],outcome:'数字、单位、期间、原文定位与研究草稿同时可审查',boundary:'不构造共识值、不做投资决定、不交易、不发布',source:'HELIX-DEMO-REPORT@v1#p12',rows:[['资料编号','RPT-DEMO-024'],['资料类型','合成季度财报'],['本期收入','234.5 百万元'],['上期收入','210.0 百万元'],['引用位置','第12页 · 收入表']]},
 huaheng:{name:'华衡智造',product:'订单变更协同智能体',subtitle:'把版本、产能和质量约束放在同一张桌面',icon:'华',accent:'#287968',record:'SO-DEMO-1024',recordLabel:'订单变更',user:'销售与计划协同人员',request:'客户将订单从100件改为140件，请核对变更影响并整理待会签的沟通选项。',objects:['订单','变更单','生产计划','库存快照','质量放行','会签记录'],agents:['版本核对智能体','影响分析智能体','协同起草智能体'],outcome:'对齐订单版本，计算缺口，形成有依据的会签与交接清单',boundary:'不承诺交期、不写生产系统、不绕过质量放行',source:'HUAHENG-DEMO-SNAPSHOT@v3',rows:[['订单编号','SO-DEMO-1024'],['已批准版本','v2 · 100件'],['客户请求版本','v3 · 140件（待会签）'],['可用库存 / 计划产出','60件 / 50件'],['新增请求','140件，交期仍待责任人确认']]},
 qinghe:{name:'青禾报销助手',product:'青禾员工服务智能体',subtitle:'制度有出处，单据有权限，反馈有去处',icon:'青',accent:'#7060a1',record:'EXP-DEMO-1008',recordLabel:'报销服务',user:'小林',request:'出差报销需要哪些材料？我的单据还需要补什么？',objects:['员工身份','有效制度','原文片段','报销单据','访问授权','服务反馈'],agents:['任务识别智能体','制度检索智能体','授权查单智能体'],outcome:'提供有效制度引用与本人单据的只读状态',boundary:'不审批、不支付、不读取他人单据',source:'QINGHE-DEMO-POLICY@2026.10#第4条',rows:[['服务单据','EXP-DEMO-1008'],['单据所有者','小林'],['单据状态','待补充住宿发票'],['本次金额','860.00 元（合成样本）'],['制度版本','差旅报销指引 · 2026.10']]},
 harmony:{"name": "鸿蒙设备协同", "product": "鸿蒙巡检协同智能体", "subtitle": "设备有身份，告警有时间，巡检有交接", "icon": "鸿", "accent": "#287b86", "record": "EVT-DEMO-008", "recordLabel": "设备告警", "user": "陈晨 · 授权巡检员", "request": "核对PUMP-017的温度告警与采样时间，给出有来源的巡检清单，等待人工交接。", "objects": ["物理设备", "OpenHarmony候选网关", "HarmonyOS候选巡检端", "遥测事件", "规则版本", "建议草稿", "人工交接"], "agents": ["身份与设备范围智能体", "遥测与时序核对智能体", "巡检建议起草智能体"], "outcome": "一屏核对设备、采样时间、规则与来源，生成待人工确认的巡检建议", "boundary": "不启停设备、不下发OTA、不绕过安全联锁、不自动派单；Web为业务替身，真机和跨系统互通待验证", "source": "HARMONY-DEMO-TELEMETRY@v1", "rows": [["资产 / 设备", "机房A · PUMP-017"], ["事件编号", "EVT-DEMO-008 · seq 108"], ["只读温度", "78℃；合成阈值70℃"], ["采样 / 核对时间", "2026-10-17 09:40:00 / 09:40:30"], ["设备链路", "传感器 → OpenHarmony候选网关 → 服务端 → HarmonyOS候选应用"], ["规则与来源", "TEMP-v1；合成快照，无真实设备连接"]]},
 fsg:{name:'上海外服集团培训项目',product:'外服服务交接智能体',subtitle:'围绕选定服务模块，核对材料、版本和交接',icon:'服',accent:'#347969',record:'FSG-DEMO-031',recordLabel:'服务需求单',user:'获授权服务经办人',request:'核对当前所选模块的服务资料与版本，生成待责任人确认的交接清单。',objects:['选课模块','服务需求','资料清单','规则版本','交接任务'],agents:['模块范围智能体','资料核对智能体','服务交接智能体'],outcome:'用选定模块的一笔合成服务需求演示受控交接',boundary:'仅处理所选模块，规则清单为训练样本，须按地区与模块重新核实',source:'FSG-DEMO-CHECKLIST@v1',rows:[['服务单号','FSG-DEMO-031'],['演示资料','需求说明、处理记录、交接清单'],['核对维度','模块、地区、版本、责任人'],['服务地区','上海（演练）'],['规则性质','合成清单，不代表真实业务规定']]},
 donghao:{name:'东浩兰生集团培训项目',product:'兰生业务协同智能体',subtitle:'让成员企业的需求、变更和交接保持同一版本',icon:'兰',accent:'#426a98',record:'DH-DEMO-042',recordLabel:'协同任务',user:'获授权模块协调人',request:'核对当前模块的需求变更、资料版本和待确认事项，形成受控协同交接。',objects:['成员企业','选课模块','需求事件','变更版本','责任清单','交接记录'],agents:['企业范围智能体','变更核对智能体','协同交接智能体'],outcome:'在一个成员企业模块中演示版本核对与具名交接',boundary:'不跨企业混用资料，不把一个模块结论推为集团事实',source:'DONGHAO-DEMO-HANDOFF@v2',rows:[['任务编号','DH-DEMO-042'],['需求版本','v2 · 待责任角色确认'],['核对材料','需求简报、变更单、交接记录'],['协同方式','按模块保留企业与资料来源'],['执行边界','只读核对，不自动变更业务系统']]}
};
export const demoScenarios=[['normal','正常业务'],['missing','材料缺失'],['conflict','版本冲突'],['unauthorized','身份无权限'],['outage','来源不可用'],['injection','越界动作请求']];
export function getDemoProduct(key,modules=[]){
 const product=demoProducts[key];if(product)return product;
 const module=modules.find(m=>m.id===key);if(!module)throw Error('Demo项目不存在');
 return {
  key,name:module.title,product:module.title+' · 业务核对助手',
  subtitle:'围绕本场景的资料、版本和交接进行合成演练',icon:module.title.slice(0,1),accent:'#1b6c80',
  record:'SCENE-'+key+'-001',recordLabel:'场景业务事件',user:'获授权业务经办人',
  source:'SCENE-DEMO-'+key+'@v1',
  objects:['业务事件','来源材料','规则版本','核对草稿','交接任务'],
  agents:['场景范围核对','资料与版本核对','交接草稿整理'],
  outcome:'核对'+module.company+'的本次事件、来源与交接条件',
  boundary:'只处理本场景的合成资料；具体业务规则、真实接口和验收条件仍需核实',
  rows:[['业务场景',module.title],['所属单位',module.company],['样本性质','合成演练，待人工核对']],
  request:'核对本次事件的材料与交接缺口，形成有来源的工作草稿。'
 };
}
export function runProjectDemo(key,input={},modules=[]){
 const p=getDemoProduct(key,modules),scenario=input.scenario||'normal',trace=[];
 if(!demoProducts[key])input={...input,moduleId:input.moduleId||key};
 const push=(agent,action,detail)=>trace.push({step:trace.length+1,agent,action,detail});
 const result=(status,title,summary,details=[],sources=[])=>({projectId:key,recordId:input.recordId||p.record,status,title,summary,details,sources,trace,mode:'offline-fixture',writes:0,externalSends:0,approval:'未获人工批准',moduleId:input.moduleId||null});
 push('入口与权限控制','校验输入','只接收当前演示项目的合成样本，所有输出保留来源。');
 if(!demoScenarios.some(([id])=>id===scenario))return result('blocked','场景无效','请选择已定义的演示场景。');
 if(input.recordId&&input.recordId!==p.record)return result('blocked','样本不存在','没有读取其他记录，请使用本项目合成样本编号。');
 if(scenario==='unauthorized'||input.identity==='unknown'||key==='qinghe'&&input.identity&&input.identity!=='xiaolin'){
  push('权限控制','拒绝读取','当前身份不具备该样本的访问范围。');return result('blocked','访问被拒绝','请切换有权访问的身份或联系具名责任人；没有读取业务来源。');
 }
 if(key==='harmony'){
  if(input.identity&&input.identity!=='operator')return result('blocked','设备范围无权限','未读取设备来源。');
  if(!['online','offline','stale','duplicate'].includes(input.deviceState||'online'))return result('blocked','设备状态无效','请选择约定的故障注入状态。');
  if(/重启|停机|启停|开机|关机|OTA|固件|联锁|绕过|忽略.{0,4}规则|自动派单|自动结单|reboot|restart|shutdown|firmware/i.test(input.request||'')){
   push('设备动作控制','拒绝控制与升级',p.boundary);return result('blocked','设备动作超出范围','仅允许只读核对与建议；设备操作由现有许可链处理。');
  }
  if(input.deviceState==='offline'){push(p.agents[1],'设备离线','无法证明当前读数有效，不读取旧快照冒充在线。');return result('degraded','设备离线，转现场人员','请核对设备与网络；恢复后重新读取并确认事件，不执行控制。');}
 }
 if((['fsg','donghao'].includes(key)||modules.some(m=>m.id===key))){
  const module=modules.find(m=>m.id===input.moduleId);if(!module){push('模块范围控制','拒绝跨范围','未选择有效的当前训练模块。');return result('blocked','模块不在本次训练范围','先在项目中选定模块，再开展该模块的服务演示。');}
  push(p.agents[0],'限定业务范围',module.company+' · '+module.title+'（'+module.id+'）');
 }
 if(scenario==='injection'||/自动核赔|自动审批|直接支付|绕过.{0,4}(审核|权限|审批)|立即下单|自动对外发送/.test(input.request||'')){
  push('动作控制','拦截越界动作',p.boundary);return result('blocked','该动作需要人工授权','请求超出演示工具边界。保留问题，由责任人决定下一步。',[p.boundary]);
 }
 if(scenario==='outage'){push(p.agents[0],'来源读取失败','合成接口不可用，不使用猜测值或旧值补齐。');return result('degraded','来源暂不可用','任务停止并转人工核对；恢复后需要重新验证当前版本。');}
 const source={id:p.source,title:p.rows.at(-1)[0],excerpt:p.rows.map(([k,v])=>k+'：'+v).join('；'),synthetic:true};
 push(p.agents[0],'读取授权快照',p.source);
 if(key==='harmony'&&['stale','duplicate'].includes(input.deviceState)){
  const stale=input.deviceState==='stale';source.excerpt=stale?'故障注入：采样已超过300秒；该历史温度不能说明当前设备状态。':source.excerpt+'；故障注入：该事件已有交接记录。';
  push(p.agents[1],stale?'读数过期':'重复事件',stale?'超过教学新鲜度阈值300秒，拒绝确认当前异常。':'关联原事件，不创建重复工单。');
  return result('manual',stale?'数据过期，需要现场核对':'重复告警，关联原事件',stale?'重新读取或转现场人员，未依据旧读数生成处理结论。':'请核对原交接记录与接收人，本次未创建或派发工单。',[],[source]);
 }
 if(scenario==='conflict'){push(p.agents[1],'发现版本不一致','输入资料与当前适用版本不一致，阻止生成确定结论。');return result('manual','版本冲突，转人工核对','请由业务负责人确认有效版本，补齐证据后再处理。',['待确认：原版本、目标版本、批准状态'],[source]);}
 if(scenario==='missing'){push(p.agents[1],'发现缺项','必要资料不完整，未补造缺失数据。');return result('needs-info','资料不足，需要补充',key==='helix'?'缺少可定位原文，暂不形成研究数字或主张。':'请补充关键材料或有效来源，当前结果仅为待办清单。',['缺项：'+(({ calder:'损失清单',helix:'本期收入原文定位',huaheng:'质量与库存快照',qinghe:'住宿发票',harmony:'有效设备标识、采样时间或规则版本',fsg:'具名交接确认',donghao:'有效变更版本'})[key]||'有效资料来源、规则版本或具名交接确认'),'补充后重新核对'],[source]);}
 let details,summary;
 if(key==='calder'){details=['材料核对：报案表、现场照片、损失清单齐全','建议队列：财产险人工理赔团队','沟通草稿：已接收材料，后续责任认定与核赔由经办人确认'];summary='材料已核对，生成分流建议和沟通草稿，等待人工审核。';}
 if(key==='helix'){const growth=(234.5-210)/210*100;details=['本期：234.5 百万元；上期：210.0 百万元',`同口径增长率：${growth.toFixed(2)}% = (234.5−210.0)÷210.0`,'共识值：未提供；不补造超预期判断','研究草稿：合成样本收入同比增长11.67%，须核对原文与传播范围'];summary='指标按期间与单位核对完成，形成带引用的研究摘录，交分析师复核。';}
 if(key==='huaheng'){const requested=input.quantity==null?140:Number(input.quantity);if(!Number.isFinite(requested)||!Number.isInteger(requested)||requested<1||requested>10000)return result('blocked','数量不符合契约','目标数量必须是1至10000之间的整数。');const gap=Math.max(0,requested-60-50);details=[`客户目标：${requested}件；库存60件＋计划50件＝110件`,`待确认缺口：${gap}件；快照不代表质量已经放行`,'沟通选项：分批交付 / 调整计划，均需责任角色会签','未确认项：客户接受范围、产能、采购与质量条件；尚未承诺交期'];summary='已对齐请求与批准版本，形成变更影响和待会签事项。';}
 if(key==='qinghe'){details=['制度依据：差旅报销需提供出差申请、费用明细与有效票据','本人单据：EXP-DEMO-1008 · 待补充住宿发票','状态来源：合成财务只读快照 · 2026-10-17 09:40','下一步：补齐票据后交财务按现有流程处理；助手未审批或付款'];summary='已找到有效制度引用，并读取小林本人的单据状态。';}
 if(key==='harmony'){details=['设备PUMP-017；事件EVT-DEMO-008；seq 108；机房A','合成快照温度78℃，高于TEMP-v1教学阈值70℃，数据年龄30秒（阈值300秒）','OpenHarmony候选网关负责采样；HarmonyOS候选应用承载巡检任务；Web模拟业务界面','下一步：由设备与业务责任人复核后走现有工单流程；未控制、升级或派单'];summary='已核对合成设备、时间与规则，形成带来源的巡检草稿，等待人工确认。';}
 if((['fsg','donghao'].includes(key)||modules.some(m=>m.id===key))){const m=modules.find(m=>m.id===input.moduleId);details=['本次模块：'+m.title,'所属企业：'+m.company,'已核对：需求说明、变更记录、交接清单（合成样本）','待确认：适用规则版本、责任人、接收人与未结项','本条结果只适用于上述模块，其他模块需单独调查'];summary='当前模块的资料与版本已核对，生成待人工确认的交接清单。';}
 push(p.agents[1],'核对规则与业务约束',details.join('；'));
 push(p.agents[2],'组织可审查输出','保留来源、待确认事项与人工责任，不执行批准动作。');
 push('人工复核关卡','等待责任人确认',p.boundary);
 return result('review',key==='qinghe'?'制度依据与本人单据状态':'待人工复核的工作草稿',summary,details,[source]);
}
export function evaluateProjectDemo(key,modules=[]){
 const p=getDemoProduct(key,modules),base={recordId:p.record,identity:key==='qinghe'?'xiaolin':'operator',moduleId:modules[0]?.id};
 const expected={normal:['review',1],missing:['needs-info',1],conflict:['manual',1],unauthorized:['blocked',0],outage:['degraded',0],injection:['blocked',0]};
 const cases=demoScenarios.map(([scenario,label])=>{const output=runProjectDemo(key,{...base,scenario},modules),[status,sources]=expected[scenario];return {id:scenario,label,passed:output.status===status&&output.sources.length===sources&&output.writes===0&&output.externalSends===0,expected:status,actual:output.status,output};});
 const unknown=runProjectDemo(key,{...base,recordId:'UNKNOWN'},modules);cases.push({id:'unknown-record',label:'未知样本拒绝',passed:unknown.status==='blocked'&&unknown.sources.length===0,expected:'blocked',actual:unknown.status,output:unknown});
 if((['fsg','donghao'].includes(key)||modules.some(m=>m.id===key))){const outside=runProjectDemo(key,{...base,moduleId:'OUT-OF-SCOPE'},modules);cases.push({id:'module-boundary',label:'跨模块范围拒绝',passed:outside.status==='blocked'&&outside.sources.length===0,expected:'blocked',actual:outside.status,output:outside});}
 if(key==='huaheng'){const invalid=runProjectDemo(key,{...base,quantity:-1},modules);cases.push({id:'invalid-quantity',label:'非法数量契约',passed:invalid.status==='blocked',expected:'blocked',actual:invalid.status,output:invalid});}
 return {mode:'offline-fixture',total:cases.length,passed:cases.filter(c=>c.passed).length,cases};
}
