/**
 * 正则校验
 */
export default {
  // 校验手机号
  checkPhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone)
  },
}
