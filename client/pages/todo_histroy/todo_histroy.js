// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      doneTodos:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.updateTodo()
  },

 // 更新todo

 updateTodo:function(){

    wx.request({
      url:'http://localhost:3000/api/todo',
      header:{
        'content-type':'application/json'
      },
      method:"GET",
      success:res=>{

        this.showTodoDone(res.data.data);

      }
    })
 },

 //显示完成todo
 showTodoDone:function(todos){
    let data = [];

    todos.forEach(item =>{
      if(item.status === 0){
        data.push(item)
      }
    })
    this.setData({
      doneTodos:data
    })
 },

 handleClickTodoItem:function(event){

   let todoId = event.currentTarget.id;

   wx.showActionSheet({
     itemList:['标记没完成','删除'],
     success:(res)=>{
       switch(res.tapIndex){
         case 0:
         this.markDoing(todoId);
         break;
         case 1:
         this.deleteTodo(todoId);
         break;
         default:
         break;

       }
     },
     fail(res){
       console.log(res.errMsg)
     }
   })

  },
  //标记没完成
  markDoing:function(todoId){
    wx.showModal({
      title:"标记没完成",
      content:'是否标记完成',
      success:(res)=>{
        wx.request({
          url:'http://localhost:3000/api/bidnstatus',
          data:{
            id:todoId,
            status:1
          },
          method:'PUT',
          success:(res)=>{
            this.updateTodo();
          }
        })
      }
    })
  },

  deleteTodo:function(todoId){
    wx.showModal({
      title:'删除todo',
      content:'是否删除已完成todo？',
      success:(res)=>{
        if(res.confirm){
          try{
            wx.request({
              url:`http://localhost:3000/api/todo/${todoId}`,
              header:{
                'content-type':'application/json'
              },
              data:{
                id:todoId
              },
              method:'DELETE',
              success:(res)=>{
                this.updateTodo();
              }
            })
          }catch(err){
            console.log(err);
          }

          wx.showToast({
            title:'删除成功',
            icon:'success',
            duration:2000
          })
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