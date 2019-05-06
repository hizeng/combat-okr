const axios = require('axios');

const authorization_code = {
    authCode:function(jscode){
        return new Promise((resolve,reject)=>{
            let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx6e1a0c389a62339d&secret=d00115f424baf0a73ce0002031684a3c&js_code=${jscode}&grant_type=authorization_code`;
            axios.get(url).then(res => {
                resolve(res.data)
            }).catch(err =>{
                reject(err.response.data)
            })
        })
    }
}
module.exports = authorization_code