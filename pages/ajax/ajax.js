// pages/ajax/ajax.js
Page({
  data:{
    url:"http://www.6vdata.com"
  },
  handleAjax() {
    wx.request({
      url: this.data.url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res);
        wx.showModal({
          title: "Ajax返回结果",
          content: `statusCode: ${res.statusCode}`
        });
      },
    })
  },
  onLoad:(options)=> {
    // 页面初始化 options为页面跳转所带来的参数
  },
})