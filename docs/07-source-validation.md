# 源码导入与本地验证

日期：2026-11-05。用户上传源码ZIP包含9个文件。单独runtime.js与包内文件逐字节一致。原README改名README.upstream.md，其余8文件保留原代码，仓库统一LF换行；src/README.md为新增说明。

## 实测结果

环境：Node.js v24.22.1，无第三方依赖。

| 检查 | 结果 |
| --- | --- |
| node --test demo.test.mjs | 2项测试通过，0失败，0跳过 |
| evaluateProjectDemo重复5轮 | 每轮8/8，共40/40 |
| 场景 | 正常、缺材料、冲突、无权限、故障、越界、未知样本、跨模块 |
| 写入及外发计数 | 所有评估输出均0；为合成结果字段，非生产审计 |
| 本地HTTP服务 | 临时端口启动成功，验证后停止 |
| GET首页/app.js/runtime.js/style.css/project.json | 5个资源200且非空 |
| 未知路径及POST首页 | 均404 |

这是本次实际本地执行，非仅引用平台报告。未在用户Windows启动，未做本地浏览器视觉验收。代码变化需重新测试。

## 重复检查复现

在src目录将以下保存为临时repeat-check.mjs并执行node repeat-check.mjs：

```javascript
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {evaluateProjectDemo} from './runtime.js';
const c=JSON.parse(await readFile(new URL('./project.json',import.meta.url),'utf8'));
for(let i=0;i<5;i++){
  const r=evaluateProjectDemo(c.projectId,c.modules);
  assert.equal(r.total,8);
  assert.equal(r.passed,r.total);
  console.log(`round ${i+1}: ${r.passed}/${r.total}`);
}
```

## 未验证或未实现

真实身份与岗位鉴权、EAM/MES接口、真实点检/振动/手册/替代关系、15分钟新鲜度、3分钟时标校准、持久化幂等、真实签核、模型稳定性、真实用户独立操作和ROI均未验证。原代码是通用场景核对演示，不等于实现了全部调研需求。
