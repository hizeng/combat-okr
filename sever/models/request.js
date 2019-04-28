const axios = require('axios');

const WXAPI = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx714a3a721b4ac357&secret=aa4cf079cb1e15dcaa447310de52b710&js_code=JSCODE&grant_type=authorization_code';

const authorization_code = {
    authCode:function(appid,secret,jscode){
        return new Promise((resolve,reject)=>{

            axios.get(WXAPI)
        })
    }
}