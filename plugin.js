/*
* 插件配置文件
*/

const { exec } = require('child_process');


// 插件名字
const name = {
  zh: '测试',
  en: 'Test'
};

/* 
  提问模板，支持 input，select，switch，checkbox
  可以参考 antd 的表单 https://ant.design/components/form-cn/
*/
const promts = [
  { 
    key: 'age',  // 用来标识问题
    label: {
      zh: '年龄',
      en: 'Input',
    },
    default: 'daily/0.0.1', // 可选，默认值
    validator: {    // 可选，校验
      func: (label) => /^daily\/\d+.\d+.\d+([.-\w])*$/.test(label), // 校验函数
      msg: 'Invalid Branch Name'  // 校验出错信息
    },
    type: 'input',
  },
  {
    key: 'lang',
    label: {
      zh: '语言',
      en: 'Language',
    },
    values: ['en', 'zh'],
    default: 'en',
    type: 'select',
  },
  {
    key: 'task',
    label: {
      zh: '任务',
      en: 'Tasks',
    },
    type: 'checkbox',
    values: ['eslint', 'test']
  },
  {
    key: 'fix',
    label: {
      zh: '自动修复',
      en: 'Fix',
    },
    default: true,
    type: 'switch'
  }
];

// 获取提问模板回答之后执行的任务
const tasks = [{
  name: 'test' // 任务名字
  run: function({
    answers,  // 提问模板回答
    logger,   // 输出截取
    projPath, // 项目目录路径
    next      // 跳出任务
  }) {
    /*
      上述promts获取的答案可能如下：
      answers: {
        age: 'daily/0.0.1'
        lang: 'en'
        task: undefined or array ['eslint', 'test']
        fix: true or false
      }
    */

    // 一定要把任务里面想要显示到gui的界面上的东西通过logger输出
    logger('This is a test demo.');

    const term = exec('echo "hello word"', { cwd: projPath });

    term.stdout.on('data', function(data) {
      logger(data);
    });

    term.on('exit', function(code) {
      // next err false 的话，会执行下一个任务，err true 会跳出任务队列
      if (code === 0) next({ err: false });
      next({ err: true });
    });
  }
}, {
  name: 'next task',
  run: function({ answers, logger, projPath, next }) {
    // 函数中一定要使用 next 控制流程
    logger('next task');
    next({ err: true });
  }
}];

module.exports = {
  name,
  promts,
  tasks,
};
