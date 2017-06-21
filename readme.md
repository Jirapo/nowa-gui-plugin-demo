## Nowa 可视化插件 demo

## 插件结构

```
|- plugin.js  配置文件
|- package.json
|- readme.md
```

配置文件中包含三部分，`name` & `promts` & `task`。具体请看 `plugin.js` 文件的注释。


// 提交
写好插件之后请使用 tnpm || npm 提交。

// 如何测试

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


