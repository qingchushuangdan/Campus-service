// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')
let charset = require('superagent-charset')
let superagent = require('superagent')
charset(superagent)

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "https://news.ecut.edu.cn/120/list.htm"
  const result = await superagent.get(serverUrl).charset('utf-8')
  const data = result.text || ''
  const $ = cheerio.load(data, { decodeEntities: false})
  
  let schoolNewsList = $('.wp_article_list').find('li')
  let schoolNewsData = []
  for (let i = 0; i < schoolNewsList.length; i++){
    let obj = {}
    obj['url'] = $(schoolNewsList[i]).find('.Article_Title').find('a').attr('href')
    obj['newsText'] = $(schoolNewsList[i]).find('.Article_Title').find('a').text()
    obj['newsTime'] = $(schoolNewsList[i]).find('.Article_PublishDate').text()
    schoolNewsData.push(obj)
  }
  let firstPage = $('.page_nav').find('.first').attr('href')
  let prevPage = $('.page_nav').find('.prev').attr('href')
  let nextPage = $('.page_nav').find('.next').attr('href')
  let lastPage = $('.page_nav').find('.last').attr('href')
  return {
    schoolNewsData,
    firstPage,
    prevPage,
    nextPage,
    lastPage
  }


}