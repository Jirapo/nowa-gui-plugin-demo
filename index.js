const Plugin = require('nowa-gui-plugin');


const name = {
  zh: '插件',
  en: 'Plugin'
};

const plugin = new Plugin({ name });

plugin.use(function* ({
  logger,     // 显示到gui的控制台中
  cwd,        // 用户项目路径
  renderPromts,  // 渲染表单
  config,     // 插件设置
}) {
  logger('in demo plugin\n');
  const res = yield renderPromts([{
    key: 'name',  // 用来标识问题
    label: {
      zh: '名字',
      en: 'Name',
    },
    default: anwsers.name, // 可选，默认值
    validator: {  // 可选，校验
      func: (value) => /\w+$/.test(value), // 校验函数
      msg: 'Invalid Name'  // 校验出错信息
    },
    type: 'input',
  }]);

  console.log('res', res);
});


module.exports = plugin;

