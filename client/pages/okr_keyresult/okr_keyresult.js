Page({
    data:{
        // info:a,
        keyresults:[],
        keyresultId:null,
        todoId:null
    },
    onLoad(options){

        wx.request({
            url:'http://localhost:3000/api/keyresults',
            header: {
            'content-type': 'application/json',
            },
            method:'GET',
            success:res=>{

                console.log(res.data.data);
                this.setData({
                    keyresults: res.data.data
                })
            }
        })

        this.setData({
           todoId : options.id
        })

    },
    // updateKeyResults:function(){
    //     this.setData()
    // },
    handleClickResult:function(event){

        this.setData({
            keyresultId: event.currentTarget.id
        });

        wx.showModal({
            title:'关联提示',
            content:'确认关联？',
            success:(res)=>{
                if (res.confirm){

                    this.bindKeyResult();

                }
            }
        })
    },
    // 关联keyResult

    bindKeyResult:function(){

        let todoid = this.data.todoId;

        let keyresultid = this.data.keyresultId;

        wx.request({
            url:'http://localhost:3000/api/bindkeyresult',
            data:{
                todoId:todoid,
                keyresultId:keyresultid
            },
            method:'PUT',
            success:res=>{
                console.log(res);
                
                wx.showToast({
                    title:'关联成功',
                    icon:'success',
                    duration:2000

                })                
            }
        })

    }
})
