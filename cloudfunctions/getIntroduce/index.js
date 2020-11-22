// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')
let charset = require('superagent-charset')
let superagent = require('superagent')
charset(superagent)

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "http://www.cqucc.com.cn/type2/41010201.html"
  const result = await superagent.get(serverUrl).charset('gb2312')
  const data = result.text || ''
  const $ = cheerio.load(data, { decodeEntities: false})
  let introduce = $('#content').html()
  let address = $('.textdisplay_147462833335953323').find('.con').find('p').eq(0).text()
  let office = $('.textdisplay_147462833335953323').find('.con').find('p').eq(1).text()
  let mobilephone = $('.textdisplay_147462833335953323').find('.con').find('p').eq(2).text()
  let telephone = $('.textdisplay_147462833335953323').find('.con').find('p').eq(3).text()
  let serverUrl2 = "http://www.cqucc.com.cn/type2/41010202.html"
  const result2 = await superagent.get(serverUrl2).charset('gb2312')
  const data2 = result2.text || ''
  const $2 = cheerio.load(data2, { decodeEntities: false})

  let masterImg = $2('.typePageContent_130819845484352481_4101').find('.type_con').find('.con').find('p').find('span').find('span').find('img').attr('src')
  let masterIntroduce = $2('.typePageContent_130819845484352481_4101').find('font').eq(1).text()
  return {
    introduce,
    address,
    office,
    mobilephone,
    telephone,
    masterImg,
    masterIntroduce
  }

}