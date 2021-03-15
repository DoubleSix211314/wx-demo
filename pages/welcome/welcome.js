// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: function(params){
    // wx.redirectTo({
    //   url: '/pages/pos/posts',
    // })

    //跳转到不带tab的页面方法
    // wx.navigateTo({
    //   url: '/pages/posts/posts',
    // })

    //跳转到带tab的页面方法
    wx.switchTab({
      url: '/pages/posts/posts',
    })

    //redirectTo与navigateTo区别
    //redirectTo 跳转页面会关闭掉上一个页面
    //navigateTo 跳转页面相当于是跳转子页面，最多可有10个层级
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})