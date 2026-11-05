# MaintFlow 参考演示源码

来源：用户于2026-11-05上传的 manufacturing-maintenance-agent-source.zip，来自FDE训练平台设备点检与维修协同项目。9个原文件已导入；原README保存在 [README.upstream.md](README.upstream.md)，其余8个源码/配置文件保留原代码，仓库统一LF换行。单独上传的runtime.js与包内文件完全一致。

## 启动

需要Node.js 22或以上，无第三方依赖，无需npm install。在仓库根目录执行：

```powershell
cd src
node server.mjs
```

浏览器打开 <http://127.0.0.1:4180>。终端按Ctrl+C停止。端口占用时可在PowerShell先设置 `$env:PORT=4181` 再启动。

## 测试

在src目录执行：

```powershell
node --test demo.test.mjs
```

2个测试项涵盖8个合成场景的状态、引用、零业务写入与零外发检查，以及未知样本拒绝。实际验证见 [验证报告](../docs/07-source-validation.md)。

## 功能与边界

范围核对→资料与版本核对→交接草稿整理。包含正常、缺材料、冲突、无权限、故障、越界、未知样本和跨模块演练，可查看引用、执行轨迹和场景评估。

独立包默认离线，无模型API密钥，不能直接使用平台DeepSeek在线服务。身份下拉框是合成演示，不是生产鉴权。无真实EAM/MES/设备连接，未实现真实交接签核、15分钟更新、时标校准和持久化幂等；不代表业务验收。

## 来源与许可

外部参考源码权利归原权利人；上传包未附独立许可证。仓库现有MIT协议不自动改变外部内容的许可。来源及SHA-256见 [source-manifest.json](../docs/data/source-manifest.json)。
