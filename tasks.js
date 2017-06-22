const { writeFileSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');

/*
* 
* 执行任务，可以在promts后执行，也可以直接执行， 必须是一个数组
* {
  name: 任务名字
  run: 执行任务的函数
}
*/

const tasks = [{
  name: 'eslint',
  run: ({
    answers, // 提问模板回答
    logger, // gui日志显示
    cwd,  // 项目目录
    next,  // 流程跳转
  }) => {

    /*
      demo 的 promts获取的答案可能如下：
      answers: {
        name: 'Nick'
        lang: 'en'
        task: undefined or array ['eslint', 'test']
        fix: true or false
      }
    */

    if (answers.task && ~answers.task.indexOf('eslint')) {
      logger('do nowa eslint task\n');
    }
    
    const term = exec('git add .', { cwd: projPath });
    term.stdout.on('data', (data) => logger(data));
    term.stderr.on('data', (data) => logger(data));
    term.on('exit', (code) => {
      if (code === 0) {
        // 流程跳转, 继续执行下个任务
        next({ err: false });
      }
      // 流程跳转, 不执行下个任务
      next({ err: true });
    });
  }
},{
  name: 'test',
  run: function({ answers, logger, cwd, next }) {
    // 不执行下个任务
    next({ err: true });
  }
},{
  name: 'lalala',
  run: function({ answers, logger, cwd, next }) {
    // 该任务不会被执行
    next({ err: false });
  }
}];

module.exports = tasks;
