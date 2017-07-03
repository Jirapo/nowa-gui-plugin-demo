/*
* 
* promts 表示需要用户填写的信息，可以是函数或者数组
* 如果是函数，包含一个参数，表示从预执行任务获取的 data， 必须返回一个数组
* 支持 input，select，switch，checkbox, text 5种类型 
* 可以参考 antd 的表单 https://ant.design/components/form-cn/
*
*/

const promts = [
  {
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
  },
  {
    key: 'date',
    label: {
      zh: '时间',
      en: 'Time',
    },
    value: new Date(),
    type: 'text'
  }
];


module.exports = promts;
