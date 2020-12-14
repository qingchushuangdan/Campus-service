// miniprogram/pages/secondHandForm/secondHandForm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  upload() {
    let that = this
    console.log('点击了上传');

    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
        console.log(res);
        that.uploadImg(res.tempFilePaths[0]);
      }
    })
  },
    uploadImg(fileUrl) {
      wx.cloud.uploadFile({
      cloudPath: 'qq.png',
      filePath: fileUrl, // 文件路径
      success: res => {
        // get resource ID
        console.log("上床成功", res)
      },
      fail: err => {
        // handle error
      }
    })
  

    

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