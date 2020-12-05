// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')
let charset = require('superagent-charset')
let superagent = require('superagent')
charset(superagent)

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "https://www.ecut.edu.cn/"
  const result = await superagent.get(serverUrl).charset('utf-8')
  const data = result.text || ''
  const $ = cheerio.load(data, { decodeEntities: false})
  let url = $('.post-more').find('span').find('a').attr('href')
  return {
    url
  }
}