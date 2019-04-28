// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleClickTodo:function(){
   
   let itemList= ['关联','标记完成'];

    wx.showActionSheet({

      itemList:['关联','标记完成'],
      success(res){
        if(res.tapIndex === 0)
        {
          wx.navigateTo({
            url:'./../okr_keyresult/okr_keyresult'
          })
        }

        if(res.tapIndex === 1){
          wx.showModal({
            title:'标记完成',
            content:'是否标记完成Todo',
            success(res){
              if(res.confirm){
                // todo
                wx.showToast({
                  title:'标记成功',
                  icon:'success',
                  duration:2000
                })
              }
            }
          })
        }

      },
      fail(res){
        console.log(res.errMsg)
      }
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