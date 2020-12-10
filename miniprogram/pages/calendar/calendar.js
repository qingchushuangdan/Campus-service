// miniprogram/pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    minDate: new Date(2020, 8, 1).getTime(),
    maxDate: new Date(2021, 8, 1).getTime(),
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 9) {
        if (date === 5) {
          day.bottomInfo = '报到注册';
        } else if (date === 7) {
          day.bottomInfo = '白露';
        } else if (date === 10) {
          day.bottomInfo = '教师节';
        } else if (date === 22) {
          day.bottomInfo = '秋分';
        }
      }
      if (month === 10) {
        if (date === 1) {
          day.bottomInfo = '国庆/中秋节';
        } else if (date === 2) {
          day.bottomInfo = '国庆节';
        } else if (date === 3) {
          day.bottomInfo = '国庆节';
        } else if (date === 8) {
          day.bottomInfo = '寒露';
        } else if (date === 21) {
          day.bottomInfo = '运动会';
        } else if (date === 22) {
          day.bottomInfo = '运动会';
        } else if (date === 23) {
          day.bottomInfo = '运动会/霜降';
        } else if (date === 25) {
          day.bottomInfo = '重阳节';
        }
      }
      if (month === 11) {
        if (date === 7) {
          day.bottomInfo = '立冬';
        } else if (date === 22) {
          day.bottomInfo = '小雪';
        } 
      }
      if (month === 12) {
        if (date === 7) {
          day.bottomInfo = '大雪';
        } else if (date === 21) {
          day.bottomInfo = '冬至';
        }
      }
      if (month === 1) {
        if (date === 1) {
          day.bottomInfo = '元旦';
        } else if (date === 5) {
          day.bottomInfo = '小寒';
        } else if (date === 20) {
          day.bottomInfo = '大寒'
        } else if (date === 23) {
          day.bottomInfo = '放寒假'
        }
      }
      if (month === 2) {
        if (date === 3) {
          day.bottomInfo = '立春';
        } else if (date === 11) {
          day.bottomInfo = '除夕';
        } else if (date === 12) {
          day.bottomInfo = '春节'
        } else if (date === 14) {
          day.bottomInfo = '情人节'
        } else if (date === 18) {
          day.bottomInfo = '雨水'
        } else if (date === 26) {
          day.bottomInfo = '元宵'
        } else if (date === 27) {
          day.bottomInfo = '报道注册'
        }
      }
      if (month === 3) {
        if (date === 5) {
          day.bottomInfo = '惊蛰';
        } else if (date === 8) {
          day.bottomInfo = '妇女节';
        } else if (date === 12) {
          day.bottomInfo = '植树节'
        } else if (date === 20) {
          day.bottomInfo = '春分'
        } 
      }
      if (month === 4) {
        if (date === 1) {
          day.bottomInfo = '愚人节';
        } else if (date === 4) {
          day.bottomInfo = '清明节';
        } else if (date === 20) {
          day.bottomInfo = '谷雨'
        }
      }
      if (month === 5) {
        if (date === 1) {
          day.bottomInfo = '劳动节';
        } else if (date === 4) {
          day.bottomInfo = '青年节';
        } else if (date === 5) {
          day.bottomInfo = '立夏'
        } else if (date === 9) {
          day.bottomInfo = '母亲节'
        } else if (date === 21) {
          day.bottomInfo = '小满'
        }
      }
      if (month === 6) {
        if (date === 1) {
          day.bottomInfo = '儿童节';
        } else if (date === 5) {
          day.bottomInfo = '芒种';
        } else if (date === 14) {
          day.bottomInfo = '端午节'
        } else if (date === 20) {
          day.bottomInfo = '父亲节'
        } else if (date === 21) {
          day.bottomInfo = '夏至'
        }
      }
      if (month === 7) {
        if (date === 1) {
          day.bottomInfo = '建党节';
        } else if (date === 3) {
          day.bottomInfo = '放暑假';
        }
      }
      return day;
    },
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