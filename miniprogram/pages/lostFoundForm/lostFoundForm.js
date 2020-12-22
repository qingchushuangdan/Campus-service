// miniprogram/pages/lostFoundForm/lostFoundForm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleSubmit(res) {
    console.log(res);
    var myDate = new Date();
    var nowTime = myDate.toLocaleString();
    console.log(nowTime);

    wx.cloud.callFunction({
      name: 'insertLostFoundInfo',
      data: {
        describe: res.detail.value.describe,
        address: res.detail.value.address,
        telephone: res.detail.value.telephone,
        radio: res.detail.value.radio,
        nowTime: nowTime,
      }
    }).then(res => {
      wx.showToast({
        title: '提交成功',
        duration: 3000,
      });
      wx.navigateTo({
        url: '../lostFound/lostFound'
      })
      console.log(res);
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