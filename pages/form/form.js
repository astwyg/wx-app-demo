// pages/form/form.js
Page({
  formSubmit: e=> {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.showModal({
      title:"form表单内容",
      content:JSON.stringify(e.detail.value),
    });
  },
  formReset: ()=> {
    console.log('form发生了reset事件')
  }
})