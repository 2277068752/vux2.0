/**
 * Created by chang on 2017/4/15.
 * 接口请求异常处理
 */

import Vue from 'vue'

// 接口返回错误码
const CODE = {
  SUCCESS: '0000' // 成功
}
export default {
  CODE,
  /**
   * 统一错误处理
   * @param code 错误码
   * @param msg 错误提示语
   * @constructor
   */
  ErrorMsgNotification (code, msg) {
    if (code !== -1) {
      Vue.$vux.alert.show({content: msg})
    } else {
      Vue.$vux.alert.show({content: '传输异常，请稍后再试！'})
    }
  }
}
