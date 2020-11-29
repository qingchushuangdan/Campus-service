// miniprogram/pages/introduce/introduce.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
    address: '',
    infomation: []

  },
  onClick(event) {
    console.log(event);
    wx.showToast({
      title: `${event.detail.title}`,
      icon: 'loading',
    });
  },
  getIntroduce() {
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'getIntroduce',
      data: {

      }
    }).then(res => {
      console.log(res);
      wx.hideLoading()
      const result = res.result || ''
      console.log(result.introduceList);
      this.setData({
        content: result.introduceList,
        address: result.address,
        office: result.office,
        mobilephone: result.mobilephone,
        telephone: result.telephone,
        masterImg: result.masterImg,
        // masterIntroduce: result.masterIntroduce
      })
      
    })
  },
  getData(){
    wx.cloud.database().collection('getIntroduces').get().then( res => {
      console.log(res);
      this.setData({
        infomation: res.data
      })
    })
  },
  
      
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIntroduce()
    this.getData()
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