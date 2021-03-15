// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event) {
      console.log(event);
      const pid = this.properties.res.postId
      //自定义一个事件名称，posttap：事件名称，{}：
      this.triggerEvent('posttap',{
        pid
      })
    },
  }
})
