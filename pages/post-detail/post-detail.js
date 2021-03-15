// pages/post-detail/post-detail.js
import {postList} from '../../data/data.js'
//调用全局app中的变量
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    _pid:null,
    collected:false,
    isPlaying:false,
    _postsCollected:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const postData = postList[options.pid];
    this.data._pid = options.pid;

    const postsCollected = wx.getStorageSync('posts_collected');
    this.data._postsCollected = postsCollected;
    let collected = postsCollected[this.data._pid];

    this.setData({
      postData,
      collected,
      isPlaying: this.currentMusicIsPlaying()//初始化进入详情页 播放图标是播放状态还是未播放状态
    })
    //声明微信小程序调用播放方法
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    
    //初始化调用微信小程序播放方法
    mgr.onPlay(this.onMusicStar)
    //初始化调用微信小程序暂停方法
    mgr.onPause(this.onMusicStop)
  },
  //判断进入页面音乐播放状态
  currentMusicIsPlaying(event){
    if(app.gIsPlayingMusic && app.gIsPlayingPostId === this.data._pid){
      return true
    }else{
      return false
    }
  },
  // onShare(event){
  //   wx.showActionSheet({
  //     itemList: ['分享到QQ','分享到微信','分享到微博','分享到朋友圈'],
  //     success(res){
  //       console.log(res)
  //     }
  //   })
  // },
  onMusicStar(event){//点击开始播放
    const mgr = this.data._mgr
    const music = postList[this.data._pid].music
    mgr.src = music.url
    mgr.title = music.title
    mgr.coverImgUrl = music.coverImg
    //记录播放的状态为true
    app.gIsPlayingMusic = true
    //记录播放的状态id值
    app.gIsPlayingPostId = this.data._pid
    this.setData({
      isPlaying:true
    })
  },
  onMusicStop(event){//点击暂停播放
    const mgr = this.data._mgr
    mgr.pause()
    //记录播放的状态为false
    app.gIsPlayingMusic = false
    app.gIsPlayingPostId = -1
    this.setData({
      isPlaying:false
    })
  },
  //promise写法
  async onShare(event){
    const result = await wx.showActionSheet({
      itemList: ['分享到QQ','分享到微信','分享到微博','分享到朋友圈'],
    })
    console.log(result)
  },

  onCollect(event){
    const postsCollected = this.data._postsCollected
    postsCollected[this.data._pid] = !this.data.collected
    // this.data.collected = true
    this.setData({
      collected:!this.data.collected
    })
    wx.setStorageSync('posts_collected',postsCollected)

    // showToast API 轻提示对话框
    // title表示提示弹框内容
    // duration表示弹窗显示的时间
    wx.showToast({
      title: this.data.collected?'收藏成功':'取消收藏',
      duration: 3000
    })
    // showModal API 模态对话框，需要手动关闭
  },

  // showModal 结合 Promise来实现回调函数
  // async onCollect(event){
  //   const result = await wx.showModal({
  //     title: '是否收藏文章',
  //   })
  //   if (result.confirm){
  //     const postsCollected = this.data._postsCollected
  //     wx.getStorageSync('key')
  //     postsCollected[this.data._pid] = !this.data.collected

  //     this.setData({
  //       collected:!this.data.collected
  //     })
      
  //     wx.setStorageSync('posts_collected',postsCollected)
  //   }
  // },

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