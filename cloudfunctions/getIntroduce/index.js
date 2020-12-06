// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')
let charset = require('superagent-charset')
let superagent = require('superagent')
charset(superagent)

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "https://www.ecut.edu.cn/2340/list.htm"
  const result = await superagent.get(serverUrl).charset('utf-8')
  const data = result.text || ''
  const $ = cheerio.load(data, { decodeEntities: false})
  let introduce = $('#wp_content_w9_0').text()
  // let introduceList = []
  // for (let i = 0; i < introduce.length; i++) {
  //   let obj = {}
  //   obj['content'] = $(introduce[i]).text().trim()
  //   introduceList.push(obj)
  // }
  let address = $('.footer_sydw_rr').html()
  // let address = $('.textdisplay_147462833335953323').find('.con').find('p').eq(0).text()
  // let office = $('.textdisplay_147462833335953323').find('.con').find('p').eq(1).text()
  // let mobilephone = $('.textdisplay_147462833335953323').find('.con').find('p').eq(2).text()
  // let telephone = $('.textdisplay_147462833335953323').find('.con').find('p').eq(3).text()
  let serverUrl2 = "https://www.ecut.edu.cn/2352/list.htm"
  const result2 = await superagent.get(serverUrl2).charset('utf-8')
  const data2 = result2.text || ''
  const $2 = cheerio.load(data2, { decodeEntities: false})

  // let masterImg = $2('.paging_content').find('div').html()
  let masterIntroduce = $2('.paging_content').find('div').find('p').text()
  return {
    introduce,
    address,
    masterIntroduce
    // office,
    // mobilephone,
    // telephone,
    // masterImg,
    // masterIntroduce
  }

}