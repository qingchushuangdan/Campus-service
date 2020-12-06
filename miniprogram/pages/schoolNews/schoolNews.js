// miniprogram/pages/schoolNews/schoolNews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolNewsList: [],
    firstPageUrl: '',
    prevPageUrl: '',
    nextPageUrl: '',
    lastPageUrl: '',
    url: '/120/list.htm',
    preAble: false,
    nextAble: false,
  },
  getSchoolNews(url) {
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'getSchoolNews',
      data: {
        url: url
      }
    }).then(res => {
      const result = res.result || ''
      console.log(res);
      wx.hideLoading();
      this.setData({
        schoolNewsList: result.schoolNewsData,
        firstPageUrl: result.firstPage,
        prevPageUrl: result.prevPage,
        nextPageUrl: result.nextPage,
        lastPageUrl: result.lastPage
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 0
      });
    })
  },
  nextPage() {
    if (this.data.nextAble) return
    this.getSchoolNews(this.data.nextPageUrl)
  },
  prevPage() {
    if (this.data.preAble) return
    this.getSchoolNews(this.data.prevPageUrl)
  },
  firstPage() {
    this.getSchoolNews(this.data.firstPageUrl)
  },
  lastPage() {
    this.getSchoolNews(this.data.lastPageUrl)
  },
  readToNews(e) {
    console.log(e);
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: `../schoolNewsContent/schoolNewsContent?url=${url}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.getSchoolNews(this.data.url)
    console.log(this.data.nextPageUrl);
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