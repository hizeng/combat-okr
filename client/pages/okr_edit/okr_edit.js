Page({

  /**
   * 页面的初始数据
   */
  data: {
    okrId:null,
    keyresults:[],
    okrContent:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(option) {

    this.setData({
      okrId:option.id
    })

    this.updateOkr(option.id);

    this.updateKeyresults();

  },


  handleBackout:function(){

    let isKeyResult = this.isKeyResult();

    if(isKeyResult){
      console.log("存在空内容！！！！")
      this.clearNullKeyResult();

    }else{

      console.log("不存在空内容");

      this.onBackout();
    }

  },
  onBackout:function(){
      wx.reLaunch({
        url:'./../okr/okr'
      })
  },

  //判断新增 keyresult 内容是否存在
  isKeyResult:function(){

    let arrkeyresults = this.data.keyresults;

    let nullkeyresultID = null;

    arrkeyresults.forEach(item=>{

      if(item.content == null || item.content.length == 0){
        nullkeyresultID = item.id;
      }
    })

    return nullkeyresultID;

  },

  //清除null keyresult
  clearNullKeyResult:function(){

    let nullkeyresultID = this.isKeyResult();

    console.log(nullkeyresultID);

    wx.request({
      url:`http://localhost:3000/api/keyresults/${nullkeyresultID}`,
      data:{
        id:nullkeyresultID
      },
      method:'DELETE',
      success:(res)=>{
        console.log("======>>>>>");
        console.log(res.data);
        console.log("清除成功");

        this.updateKeyresults();

        this.onBackout();
      }
    })


  },

  updateOkr:function(id){

    wx.request({
      url:`http://localhost:3000/api/okr/${id}`,
      data:{
        id:id
      },
      header:{
        'content-type':'application/json',
        'id':id
      },
      method:'GET',
      success:(res)=>{

        let arrOkrContent = res.data.data;

        this.setData({
          okrContent:arrOkrContent[0].content
        })

      }


    })

  },

  updateKeyresults: function(){

    wx.request({
      url:'http://localhost:3000/api/keyresults',
      header:{
        'content-type':'application/json',
      },
      data:{
        id:this.data.okrId
      },
      method:'GET',
      success:(res)=>{

        this.showCurrentKeyresults(res.data.data);

      }

    })

  },

  showCurrentKeyresults:function(data){

    let okrId = this.data.okrId;

    let arrCurrentKeyResult = []; 

    data.forEach((item)=>{

      if(item.objId == okrId ){

       arrCurrentKeyResult.push(item);

      }
    })

    this.setData({

      keyresults:arrCurrentKeyResult,

    })

  },

  handleAdd: function(){

    wx.request({
      url:'http://localhost:3000/api/keyresults',
      header:{
        'content-type':'application/json'
      },
      data:{
        objId:this.data.okrId
      },
      method:'POST',
      success:(res)=>{

        this.updateKeyresults();

      }

    })

    // console.log(this.data.okrId);


  },
  handleDelete: function(event){

    let keyresultId = event.currentTarget.id;

    this.clearKeyResultItem(keyresultId);

  },
  //清除 keyresultItem 
  clearKeyResultItem: function(id){

     console.log(id);

     wx.request({
       url:`http://localhost:3000/api/keyresults/${id}`,
       data:{
         id: id
       },
       method:'DELETE',
       success:(res)=>{
         console.log(res.data);

         console.log('清除成功');

         this.updateKeyresults();
       }
     })

  },
  formSumbit: function(event){

    let from_data = event.detail.value;

    let okrContent = from_data.okrContent.trim();

    if(okrContent || okrContent.length != 0){
      console.log("okr有内容")

      let okrId = this.data.okrId;

      wx.request({
        url:`http://localhost:3000/api/okr/${okrId}`,
        data:{
          id:okrId,
          content:from_data.okrContent
        },
        method:'PUT',

        success:(res)=>{

          console.log("保存okr成功")

        }

    });

    }else{
      console.log("没内容")
    }

    this.clearNullKeyResult();


    console.log('===========>>')





  }
  
})