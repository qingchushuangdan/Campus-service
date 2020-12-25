//app.js
let config = require('config.js')
App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'trc-7gdo18rebec45a1b',
        traceUser: true,
      })
    }
    this.globalData = {}
    var _this = this;
    //载入学校位置数据
    _this.loadSchoolConf()
    //如果已经授权，提前获取定位信息
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userLocation']) {
          //获取地理位置
          wx.getLocation({
            type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
            success: function (res) {
              _this.globalData.latitude = res.latitude;
              _this.globalData.longitude = res.longitude;
              _this.globalData.islocation = true
            }
          })
        }
      }
    })
    //加载云开发控制台内存储的图片
    wx.cloud.init({

      traceUser: true,

    })
  },
  loadSchoolConf: function () {
    var _this = this
    // 载入本地数据
    _this.globalData.map = _this.school.map;
    _this.globalData.introduce = _this.school.introduce;


    if (!this.debug) {
      // 优先读取缓存信息
      var map = wx.getStorageSync('map')
      var introduce = wx.getStorageSync('introduce')
      if (map && introduce) {
        _this.globalData.map = map;
        _this.globalData.introduce = introduce;
      }


      // 再加载网络数据
      wx.request({
        url: config.updateUrl,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log("加载远程数据")
          if (res.data.map && res.data.map.length > 0) {
            //刷新数据
            _this.globalData.map = res.data.map;
            _this.globalData.introduce = res.data.introduce;

            // 存储学校位置数据于缓存中
            wx.setStorage({
              key: "map",
              data: res.data.map
            })
            wx.setStorage({
              key: "introduce",
              data: res.data.introduce
            })
          }
        },
        complete: function () {
          // 渲染id
          for (let i = 0; i < _this.globalData.map.length; i++) {
            for (let b = 0; b < _this.globalData.map[i].data.length; b++) {
              _this.globalData.map[i].data[b].id = b + 1;
            }
          }
        }
      })

    }

  },
  debug: config.debug, //开启后只调用本地数据
  //imgCDN: config.imgCDN,
  school: require('/resources/' + config.school),
  globalData: {
    userInfo: null,
    map: null,
    introduce: null,
    latitude: null,
    longitude: null
  }

})


