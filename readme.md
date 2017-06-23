## Nowa 可视化插件 demo

## 插件结构

```
|- index.js   模块清单
|- pretask.js 预执行任务
|- promts.js  提问模板
|- tasks.js   主任务文件
|- .nowa      属性配置文件
|- package.json
|- readme.md
```

模块中包含四部分，`name` & `promts` & `tasks` & `pretask`。

* name 必须     表单名字
* pretask 可选  预执行任务
* promts 可选   提问模板
* tasks 必须    主任务队列

### 执行顺序

插件执行流程为 pretask -> promts -> tasks


如果希望用户填写信息然后执行任务，可以使用 `promts` 配置表单信息。

如果希望用户表单内容是通过其他代码获取数据才能渲染的，可以使用 `pretask`。


具体请看每个文件的注释。

## .nowa 配置文件

在插件运行时外的一份配置文件，用来表示插件的特征，这不应该是通过 `promts` 得到的答案。

后期会在nowa中可视化显示。



## 提交
写好插件之后请使用 tnpm || npm 提交。

## 如何测试

可以联系我测试，提issue 或者手动测试，比较麻烦。

以下是手动测试的步骤。

1. 提交一个 nowa-gui 的测试列表到 npm

这个包可以命名为 `my-nowa-gui-plugins`。

在 `package.json` 中增加`plugins`字段：

```
{
  ...,
  "plugins": [
    {
      "name": "@ali/plugin-name", // 内网使用的名字
      "type": "ui",
      "origin": "ali"
    },
    {
      "name": "plugin-name", // 外网使用的名字
      "type": "ui",
      "origin": "common"
    }]
  }
```

2. fork 或者 clone nowa－gui 的源码

https://github.com/nowa-webpack/nowa-gui

找到 `src/renderer/models/plugin.js` 中的 `nowa-gui-plugins` 更换为 `my-nowa-gui-plugins`

那么启动 gui 的时候，可以在设置页面中的插件设置里面看到 `my-nowa-gui-plugins`里面列出来的组件。

项目详情页面基础操作区域会出现 *...* 的更多按钮，用户可以开始测试了。


