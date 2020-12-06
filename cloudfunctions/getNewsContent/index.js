// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')
let charset = require('superagent-charset')
let superagent = require('superagent')
charset(superagent)

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://news.ecut.edu.cn${event.url}`
  const result = await superagent.get(serverUrl).charset('utf-8')
  const data = result.text || ''
  const $ = cheerio.load(data, { decodeEntities: false})
  let schoolNewsTitle = $('.arti_title').find('span').text()
  let browerCount = $('.arti_metas').find('span').text()
  let contentList = $('.wp_articlecontent').find('p').text()
  // let contentData = []
  // for (let i = 0; i < contentList.length; i++) {
  //   let obj = {}
  //   obj['content'] = $(contentList[i]).text()
  //   contentData.push(obj)
  // }
  return {
    schoolNewsTitle,
    browerCount,
    contentList
  }
  
}