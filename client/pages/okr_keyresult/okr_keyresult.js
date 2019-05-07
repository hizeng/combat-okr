Page({
    data:{
        // info:a,
        todoId:null
    },
    onLoad(options){

        // let todoid = 

        this.setData({
           todoId : options.id
        })

        console.log(options.id);

    },
    handleClickResult:function(){
        wx.showModal({
            title:'关联提示',
            content:'确认关联？',
            success:(res)=>{
                if (res.confirm){
                    //todo
                    this.bindKeyResult();

                    wx.showToast({
                        title:'关联成功',
                        icon:'success',
                        duration:2000

                    })
                }
            }
        })
    },
    // 关联keyResult

    bindKeyResult:function(){

        let todoid = this.data.todoId;

        console.log(todoid)
    }
})
