// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    okrsInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.updateOkrs();

    // console.log("onLoad++++++")

  },

  //更新updateOkrs
  updateOkrs:function(){
    wx.request({
      url:'http://localhost:3000/api/okr',
      header: {
        'content-type':'application/json'
      },
      data:{

      },
      method:'GET',
      success:(res)=>{

        this.showOkrs(res.data.data);

      }
    })
  },

  showOkrs:function(okrs){

    // console.log(okrs);
    
    this.setData({
      okrsInfo:okrs
    })
  },

  handelClickOkr:function(event){

    let okrId = event.currentTarget.id;

    // console.log(okrId);

    wx.showActionSheet({
      itemList:['查看','编辑','删除'],
      success:(res)=>{
        res.tapIndex === 0 && wx.navigateTo({
          // url:'./../okr_details/okr_details/'
          url:`./../okr_details/okr_details?id=${okrId}`
        });
        res.tapIndex === 1 && wx.reLaunch({
          // url:'./../okr_edit/okr_edit'
          url:`./../okr_edit/okr_edit?id=${okrId}`

        });

        if(res.tapIndex === 2){
          wx.request({
            url:`http://localhost:3000/api/okr/${okrId}`,
            header:{
              'content-type': 'application/json',          
            },
            data:{
              id:okrId
            },
            method:'DELETE',
            success:(res)=>{

              console.log("删除成功")

              this.updateOkrs();

            }

          })
        }



      },
      fail(res){
        console.log(res.errMsg)
      }
    })
  },

  handelClickCreate:function(){
    // wx.navigateTo({
    //   url:'./../okr_create/okr_create'
    // })
    wx.reLaunch({
      url:'./../okr_create/okr_create'
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