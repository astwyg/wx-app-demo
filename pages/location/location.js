
Page({
  handleShowPosition(){
    wx.openLocation({
          latitude: this.data.loc.latitude,
          longitude: this.data.loc.longitude,
          scale: 28
        })
  },
  onLoad() {
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: res => {
        console.log(res);
        res.message = "suucess!";
        this.setData({ loc: res });
        
      },
      fail: res => {
        this.setData({ loc: { message: "failed!" } });
      },
    })
  }
})