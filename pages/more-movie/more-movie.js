// pages/more-movie/more-movie.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    _type: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const type = options.type;
    this.data._type = type;
    wx.request({
      url: app.gBaseUrl + type,
      data:{
        start: 0,
        count: 12
      },
      success:(res) => {
        console.log(res.data)
        this.setData({
          movies: res.data.subjects
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let title = ''
    switch(this.data._type){
      case 'in_theaters':
        title = '正在热映'
        break
      case 'coming_soon':
        title = '即将上映'
        break
      case 'top250':
        title = '豆瓣Top250'
        break
    }
    wx.setNavigationBarTitle({
      title: title,
    })
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
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data:{
        start: 0,
        count: 12
      },
      success:(res) => {
        console.log(res.data)
        this.setData({
          movies: res.data.subjects
        })
        // 下拉刷新请求完数据关闭请求状态效果
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {// 下滑页面加载数据
    // 触发旋转按钮，表示正在加载中
    wx.showNavigationBarLoading()
    wx.request({
      url: app.gBaseUrl + this.data._type,
      data:{
        start: this.data.movies.length,
        count: 12
      },
      success:(res) => {
        console.log(res.data)
        this.setData({
          movies: this.data.movies.concat(res.data.subjects)
        })
        // 数据加载完毕，关闭旋转按钮
        wx.hideNavigationBarLoading()
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})