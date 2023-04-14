/**
 * from表单自定义校验
 */
export default {
  // 校验名称
  checkName: function (rule, value, callback) {
    var reg = /^[A-Za-z\u4e00-\u9fa5（）()]+$/u;
    if (!reg.test(value)) {
      callback(new Error('名称只允许英文字母、中文汉字和中文括号'));
    } else {
      callback();
    }
  },

  // 校验登录账号
  checkLoginId: function (rule, value, callback) {
    var reg = /^[a-zA-Z][a-zA-Z0-9_]*$/u;
    if (!reg.test(value)) {
      callback(new Error('登录账号只允许大、小写字母、数字和下划线,必须以字母开头'));
    } else {
      callback();
    }
  },

  // 校验密码
  checkPassword: function (rule, value, callback) {
    var reg = /^(?!^[a-zA-Z]*$)(?!^[A-Z0-9]*$)(?!^[a-z0-9]*$)^[a-zA-Z0-9]{3,}$/u;
    if (!reg.test(value)) {
      callback(new Error('密码只允许大、小写字母和数字，必须三种都包含'));
    } else {
      callback();
    }
  },

  // 校验手机号
  checkPhone: function (rule, value, callback) {
    var reg = /^1[3-9]\d{9}$/u;
    if (!reg.test(value)) {
      callback(new Error('请输入正确的手机号'));
    } else {
      callback();
    }
  },

  // 校验身份证号码
  checkIdNumber: function (rule, value, callback) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/u;
    if (!reg.test(value)) {
      callback(new Error('请输入正确的身份证号码'));
    } else {
      callback();
    }
  },

  // 校验邮箱
  checkEmail: function (rule, value, callback) {
    var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/u;
    if (!reg.test(value)) {
      callback(new Error('请输入正确的邮箱'));
    } else {
      callback();
    }
  },
}
