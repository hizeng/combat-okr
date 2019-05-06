const debug = require('debug')('koa-app');
const authCode = require('./../utils/authCode.js');

module.exports  = async function(ctx,next){
    try{
        
        // console.log("okoko"+ ctx.headers.token);

        // let user_id = authCode(ctx.headers.token,'DECODE');
        // // console.log(user_id);
        // if(user_id){
        //     ctx.state.user_id = user_id;
        // }
        await next()
        
    }catch(e){
        debug('Catch Errror:%o',e)

        ctx.state = 200

        ctx.body = {
            code:-1,

            error:e && e.message ? e. message :e.toString()
        }
    }
}
