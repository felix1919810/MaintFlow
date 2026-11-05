# MaintFlow · 维序

设备点检与维修协同业务核对助手。围绕海岳机电合成案例，整理业务发现、六角色访谈、现状流程、需求、方案、评估及交付记录。

## 项目状态

2026-11-05，训练平台项目练习 1 已完成 **27/27 项任务、9/9 个关卡**。这是训练评分结果，不代表真实客户验收、生产上线或业务收益。

核心方向：点检术语统一、历史资料引用检索、交接草稿、人工复核与审计。设备接口只读，不自动维修、远程控制、解除联锁或批准复产。

## 按课程要求阅读

| 内容 | 文件 |
| --- | --- |
| 业务挖掘 | [01-business-discovery.md](docs/01-business-discovery.md) |
| 调研记录 | [02-interviews.md](docs/02-interviews.md) |
| 现场调研分析 | [03-field-analysis.md](docs/03-field-analysis.md) |
| 项目原有四份资料 | [资料来源与缺口](docs/originals/README.md) |
| 现状流程图 | [04-current-process.md](docs/04-current-process.md) |
| 27项答案与评分全文 | [06-training-record.md](docs/06-training-record.md) |
| 九阶段成果索引 | [05-project-delivery.md](docs/05-project-delivery.md) |
| 访谈事实数据 | [interview-facts.json](docs/data/interview-facts.json) |
| 演练执行记录 | [demo-runs.csv](docs/data/demo-runs.csv) |
| 代码来源 | [src/README.md](src/README.md) |

## 代码与资料来源

本项目基于 FDE 训练中心“设备点检与维修协同”案例。平台提供业务核对助手 v1.0 的离线参考源码，标识 `962479e02400`。源码原包已于2026-11-05导入src，保留原文件内容和来源清单；启动见 [src/README.md](src/README.md)，验证见 [07-source-validation.md](docs/07-source-validation.md)。不将平台预置源码冒充自研代码，也不将访谈中“可提供”的材料写成已经获取。

## 验证边界

本次Node.js v24.22.1本地实际执行：2项测试通过；8个场景重复5轮共40/40通过；5个HTTP资源200，非法路径及POST返回404。平台此前也报告8例5轮40/40通过，模式均为offline-fixture。另实际运行正常、材料缺失、版本冲突、身份无权限、来源不可用和越界动作六种界面演练，均无自动批准或业务写入。真实模型稳定性、身份、EAM/MES 接口、现场单据、用户独立完成能力和业务收益均未验证。

## 许可

仓库现有 MIT 协议应予保留；外部训练平台资料及参考源码的权利归其原权利人，仓库 MIT 协议不自动授予外部内容的再许可权。
