// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onBackout:function(){
    wx.reLaunch({
      url:'./../okr/okr'
    })
  },
  //目标 obj 提交
  formSubmit: function(event){

   let data = event.detail.value;

   let obj = data.inputObj;

   let keyResult = data.inputKr;

   wx.request({
     url:'http://localhost:3000/api/okr',
     header:{
       'content-type':'application/json'
     },
     data:{
       obj:obj,
       keyResult:keyResult
     },
     method:'POST',
     success:(res)=>{
       // console.log(res.data);
       wx.showToast({
         title:'保存成功',
         icon:'success',
         duration:2000
       })
     }

   })

  },
  //目标obj 重设
  formReset: function(event){
    console.log("干嘛重设");
  },

})