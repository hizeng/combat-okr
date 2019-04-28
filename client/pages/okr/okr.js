// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handelClickOkr:function(){
    wx.showActionSheet({
      itemList:['查看','编辑'],
      success(res){
        res.tapIndex === 0 && wx.navigateTo({
          url:'./../okr_details/okr_details'
        });
        res.tapIndex === 1 && wx.navigateTo({
          url:'./../okr_edit/okr_edit'
        })


      },
      fail(res){
        console.log(res.errMsg)
      }
    })
  },
  handelClickCreate:function(){
    wx.navigateTo({
      url:'./../okr_create/okr_create'
    })
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