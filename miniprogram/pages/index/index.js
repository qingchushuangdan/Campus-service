// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/swiper1.jpg',
      '/images/swiper4.jpg',
      '/images/swiper3.jpg',
      '/images/swiper5.jpg',
    ],
    logo: '../../images/logo.png',
    interval: 3000,
    duration: 500,
    enterUniversity: '走进ECUT',
    universityServer: 'ECUT服务',
    enterUniversityList: [
      {
        id: 1,
        url: '',
        imgUrl: '/images/introduce.png',
        text: 'ECUT简介'
      },
      {
        id: 2,
        url: '',
        imgUrl: '/images/run.png',
        text: '逛逛ECUT'
      },
      {
        id: 3,
        url: 'list.htm',
        imgUrl: '/images/schoolNews.png',
        text: 'ECUT动态'
      },
      {
        id: 4,
        url: '',
        imgUrl: '/images/department.png',
        text: '院系介绍'
      },
      {
        id: 5,
        url: '',
        imgUrl: '/images/cal.png',
        text: '校历'
      }
    ],
    universityServerList: [
      {
        id: 1,
        imgUrl: '/images/exchange.png',
        text: '闲置交易'
      },
      {
        id: 2,
        imgUrl: '/images/lost-found.png',
        text: '失物招领'
      },
      {
        id: 3,
        imgUrl: '/images/deliever.png',
        text: '代拿快递'
      },
      {
        id: 4,
        imgUrl: '/images/carpooling.png',
        text: '拼车出行'
      },
      {
        id: 5,
        imgUrl: '/images/bodytest.png',
        text: '体质检测'
      }
    ]


  },
  getFunction: function (e) {
    // console.log(e);
    var $id = e.currentTarget.dataset.id
    console.log($id);
    if ($id == 1) {
      wx.navigateTo({
        url: '../introduce/introduce'
      })
    }
    if ($id == 2) {
      wx.navigateTo({
        // url: '../schoolNews/schoolNews'
      })
    }
    if ($id == 3) {
      wx.navigateTo({
        url: '../schoolNews/schoolNews'
      })
    }
    if ($id == 4) {
      wx.navigateTo({
        url: '../collegeIntroduction/collegeIntroduction'
      })
    }
    if ($id == 5) {
      wx.navigateTo({
        url: '../calendar/calendar'
      })
    }

  },
  // getNewsInt() {
  //   wx.cloud.callFunction({
  //     name: 'getNewsInt',
  //     data: {}
  //   }).then(res => {
  //     const result = res.result || ''
  //     // console.log(result); 
  //     this.setData({
  //       url: result.url.split('/')[4]
  //     })
  //     console.log(this.data.url);
      
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    // this.getNewsInt()
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