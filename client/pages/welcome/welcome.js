// pages/todo/todo.js
const app = getApp();
 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    token:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user_id',
      success: (res) => {
        if(res.data){
          this.setData({
            token: res.data
          });

          wx.reLaunch({
            url:'./../todo/todo'
          });
        }

      }
    });

  },
  handleLogin:function(){
    wx.login({
      success:(res)=>{   
        if (res.code) {
          // 向后台server发起网络请求
          wx.request({
            url: 'http://localhost:3000/api/login',
            data: {
              code:res.code
            },
            method:'POST',
            header: {
              'content-type': 'application/json' ,
              'token':this.data.token// 默认值
            },
            success(res){

              wx.setStorage({
                key: 'user_id',
                data: res.data.user_id
              })

              wx.reLaunch({
                url:'./../todo/todo'
              });
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
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