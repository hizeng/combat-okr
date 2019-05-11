// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token:'',
    user_id:'',
    todoList:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      const value = wx.getStorageSync('user_id')
 
      if (value) {
        wx.request({
          url: 'http://localhost:3000/api/testapi', // 仅为示例，并非真实的接口地址
          header: {
            'content-type': 'application/json',
            'token':value // 默认值
          },
          method:'GET',
          success:(res)=>{

            this.setData({
              user_id: res.data.user_id
            })
          }
        })
      }
    } catch (e) {

      console.log(e)
    }

    this.updateTodo();

  },
  // 点击todo子项
  handleClickTodo:function(event){

   let todoId = event.currentTarget.id;

   let itemList= ['关联','标记完成','删除'];

    wx.showActionSheet({
      itemList:['关联','标记完成','删除'],
      success:(res)=>{
        switch (res.tapIndex) {
          case 0:
          this.navigateTo(todoId);
            break;
          case 1:
          this.markDone(todoId);
            break;
          case 2:
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

  // 跳转resultTodo
  navigateTo:function(todoId){
      wx.navigateTo({
        // url:'./../okr_keyresult/okr_keyresult?id='
        url:`./../okr_keyresult/okr_keyresult?id=${todoId}&key=1`
      })  
  },

  //标记完成
  markDone:function(todoId){
    console.log("标记"+todoId);
      wx.showModal({
        title:'标记完成',
        content:'是否标记完成Todo',
        success:(res)=>{
          if(res.confirm){
            wx.request({
              url:'http://localhost:3000/api/bindstatus',
              data:{
                id:todoId,
                status:0
              },
              method:'PUT',
              success:(res)=>{
                console.log('updateTodo===========');
                console.log(res);
                this.updateTodo();
              }
            })

            wx.showToast({
              title:'标记成功',
              icon:'success',
              duration:2000
            })
          }
        }
      })   
  },
  // 删除todo
  deleteTodo:function(todoId){
    wx.showModal({
      title:'删除todo',
      content:'是否删除Todo',
      success:(res)=>{
        if(res.confirm){

         try{
          wx.request({
            // url:'http://localhost:3000/api/todoStatus',
            //常规通过url传值 :id
            url:`http://localhost:3000/api/todo/${todoId}`,
            header: {
              'content-type': 'application/json' // 默认值
            },
            data:{
              id:todoId
            },
            method:'DELETE',
            success:(res)=>{
              this.updateTodo();
            }
          })
         }catch(e){
           console.log(e);
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

  // 确认输入
  handleConfirm:function(event){

    const keyValue = event.detail.value;

    const time = new Date();

    wx.request({
      url:'http://localhost:3000/api/todo',
      data:{
        value: keyValue,
        status:1
      },
      header:{
        'content-type': 'application/json' 
      },
      method:'POST',
      success:(res)=>{
        this.updateTodo();

      }

    })
  },

  //更新todo列表
  updateTodo:function(){
    wx.request({
      url:'http://localhost:3000/api/todo',
      header:{
        'content-type':'application/json'
      },
      method:'GET',
      success:(res)=>{

         let todos = res.data.data;

         // 过滤todo状态
         this.showTodoDoing(todos); 
      }
    })
  },

  // 显示没完成todo
  showTodoDoing:function(todos){

    let data = [];

    todos.forEach(item =>{
      if(item.status === 1){
        data.push(item)
      }
    })
     this.setData({
       todoList :data
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