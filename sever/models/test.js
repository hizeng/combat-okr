const axios = require('axios');

const DOUBANAPI = 'https://api.douban.com/v2/book/isbn/';

const douban = {
    isbn:function(isbn){
        return new Promise((resolve,reject) => {
            axios.get(DOUBANAPI + isbn).then( res => {
                resolve(res.data)
            }).catch( err => {
                reject(err.response.data)
            })
        })
    }
}

module.exports = douban
