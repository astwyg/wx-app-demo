# 简介

这是微信小程序的demo项目, 练手之作, 对各种常用功能给出示例代码, 希望各位不吝补充.

# 使用方法

直接clone项目之后导入微信开发者工具即可.

# 大概是个什么样

![demo](https://raw.githubusercontent.com/astwyg/wx-app-demo/dummy/resources/image/demo.png)

# 一些额外说明

* 所有例子都是用ES6写的.
* 如果你有cocos2d-js开发经验, 那么这个项目就是在向cocos2d-js官方demo致敬.
* 我正在尝试将redux数据流引入微信小程序开发, 如果你有相关经验, 欢迎和我交流.
* css只能保存之后看效果, 尚没有什么好的调试手段.

# 开发建议

1. 请注意事件无法绑定参数
下面的代码是无效的:
```
<button type="primary" bindtap="handleBtn.bind(this,'../ajax/ajax')">发送Ajax请求</button>
```
需要使用下面方法:
```
<button type="primary" bindtap="handleBtn" data-url="../ajax/ajax">发送Ajax请求</button>
...
  handleBtn(e){
    wx.navigateTo({
      url: e.target.dataset.url
    })
  },
```

# 联系方式

拉了个qq群: 598632313