//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    loc:{},
  },
  //事件处理函数
  handleBtnLog() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  handleBtnLocation() {
    wx.navigateTo({
      url: '../location/location',
    })
  },
  handleBtnForm(){
    wx.navigateTo({
      url: '../form/form',
    })
  },
  onLoad: function () {
    //调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      //更新数据
      this.setData({
        userInfo:userInfo
      })
    })
    
  }
})
