// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'trc-7gdo18rebec45a1b'
cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  let groupList = await db.collection('user').where({
    openId: openId
  }).get()
  let _name = groupList.data[0].name
  let _avatar = groupList.data[0].avatarUrl
  let _nickname = groupList.data[0].nickName

  await db.collection('groupList').add({
    data: {
      name: _name,
      avatar: _avatar,
      nickname: _nickname,
      OPENID: event.userInfo.openId,
      describe: event.describe,
      address: event.address,
      price: event.price,
      telephone: event.telephone,
      radio: event.radio
    }
  })
}