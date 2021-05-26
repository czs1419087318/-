// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  await cloud.database().collection("test").doc(event.result[0].id)
  .update({data:{
    result:event.result,
  }
  })
  .then(res=>{console.log("S") 
  return res})
  .catch(res=>{console.log("F")
  return res})

  return 0
}