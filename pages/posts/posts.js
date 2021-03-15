// pages/pos/posts.js
import {postList} from '../../data/data.js'
console.log(postList)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    res:{
      text:"123"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //ES6 函数写法
  // onLoad(options) {},

  // 小程序缓存
  // 往缓存里驻入值（同步）
  // wx.setStorageSync('text','1'),
  // 缓存里面删除值
  // wx.removeStorageSync('text'),
  // 清除所有缓存
  // wx.clearStorageSync(),
  // 获取缓存数据
  // wx.getStorageSync('text')

  // 缓存驻入值（异步）
  // wx.setStorage({
  //   data: data,
  //   key: 'key',
  // })
  async onLoad (options) {
    wx.setStorageSync('flag', 1)

    const flag = await wx.getStorage({
      key: 'flag',
    })

    console.log(flag)

    this.setData({
      postList
    })
  },

  onGoToDetail (event){
    console.log(event);
    const pid = event.currentTarget.dataset.id | event.detail.pid
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid=' + pid,
    })
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