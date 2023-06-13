// app.js
wx.cloud.init({
  env: 'ck-4g1bxx2x00e7052a', //填上你的云开发环境id
  traceUser: true,
})
App({
  // wx.cloud.init({
  //   env: 'ck-4g1bxx2x00e7052a', //填上你的云开发环境id
  //   traceUser: true,
  // }),
  // const : db = wx.cloud.database(),
  onLaunch:function name(params) {
    //云初始化
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    
  },
  
  //点击加载更多
  loadMore:function(){
    const db = wx.cloud.database();
    const cont = db.collection('fitnessRoom');
    db.collection('fitnessRoom').get({
      success(res){
        console.log(res.data);
      }
    })
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
