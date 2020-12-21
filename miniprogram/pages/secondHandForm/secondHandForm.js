// miniprogram/pages/secondHandForm/secondHandForm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   photoUrl: '',
  },
  handleSubmit(res) {
    console.log(res);
      var myDate = new Date();
      var nowTime = myDate.toLocaleString(); 
      var timestamp=myDate.getTime();
      console.log(nowTime); 
      console.log(timestamp);
      
    wx.cloud.callFunction({
      name: 'insertSecondHandInfo',
      data: {
        describe: res.detail.value.describe,
        price: res.detail.value.price,
        address: res.detail.value.address,
        telephone: res.detail.value.telephone,
        radio: res.detail.value.radio,
        nowTime: nowTime,
        timestamp: timestamp
      }
    }).then (res => {
      wx.showToast({
        title: '提交成功',  
        duration: 3000,
      });
      wx.navigateTo({
        url: '../secondHand/secondHand'
      })
      console.log(res);
    })
  },
  afterRead(event) {
    // console.log(event);
    const { file } = event.detail
    this.setData({
      photoUrl: file.url
    })
    // console.log(file.url);
    
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
        console.log("上传成功", res)
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