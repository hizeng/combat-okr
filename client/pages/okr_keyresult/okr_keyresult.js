let a = [1,2,3];

Page({
    data:{
        info:a
    },
    // onLoad(){
    //     this.setData({
    //         info:a

    //     })

    //     console.log(this.info);

    // },
    handleClickResult:function(){
        wx.showModal({
            title:'关联提示',
            content:'确认关联？',
            success(res){
                if (res.confirm){
                    //todo
                    wx.showToast({
                        title:'关联成功',
                        icon:'success',
                        duration:2000

                    })
                }
            }
        })
    }
})
