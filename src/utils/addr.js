// const common = require("@/utils/addr.js");

const HOST = "https://salary.intopcareer.cn/";

module.exports = {
  insertuser_info: HOST + "index.php/index/index/insertuser_info", //提交
  getuser_info: HOST + "index.php/index/index/getuser_info", //获取提交内容
  getuser: HOST + "index.php/index/index/getuser", //登录
  sendSms: HOST + "index.php/index/user/sendSms", //获取验证码
  getPhoneBySms: HOST + "index.php/index/user/getPhoneBySms", //验证手机号码
}