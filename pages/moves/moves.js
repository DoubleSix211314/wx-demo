// pages/moves/moves.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: [],
    searchResult: false,
    searchData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      data:{
        start: 0,
        count: 3
      },
      success:(res) => {
        console.log(res.data)
        this.setData({
          inTheaters: res.data.subjects
        })
      }
    })
    wx.request({
      url: app.gBaseUrl + 'coming_soon?start=0&count=3',
      success:(res) => {
        console.log(res.data)
        this.setData({
          comingSoon: res.data.subjects
        })
      }
    })
    wx.request({
      url: app.gBaseUrl + 'top250?start=0&count=3',
      success:(res) => {
        console.log(res.data)
        this.setData({
          top250: res.data.subjects
        })
      }
    })
  },

  onGotoMore(event){
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: "/pages/more-movie/more-movie?type=" + type,
    })
  },

  // 点击搜索监听搜索框里面内容
  onConfirm(event){
    this.setData({
      searchResult: true
    })
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{
        q: event.detail.value
      },
      success:(res) => {
        console.log(res.data)
        this.setData({
          searchData: res.data.subjects
        })
      }
    })
  },

  // 监听点击取消按钮触发页面排版内容
  onCancel(event){
    console.log(event)
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