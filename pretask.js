const { execSync } = require('child_process');

/*
* 
* 插件预执行任务, pretask 必须是一个函数
* 包含三个参数, cwd, logger, next
* 程序必须含有 next 跳出流程, err 表示任务是否失败，data 表示任务要提交给 promts 的参数
* 
*/
const pretask = function({
  cwd,  // 项目目录
  logger, // gui日志显示
  next,   // 流程跳转
}) {
  try {
    // do some tasks...
    // for example 
    const res = execSync('echo "hello"', { cwd });
    logger(res);
    next({ err: false, data: 'hello' });
  } catch (e) {
    logger(e.message);
    next({ err: true, data: null });
  }
};


module.exports = pretask;