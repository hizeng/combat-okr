const debug = require('debug')('koa-app')

module.exports = async function(ctx,next){
    try {
        await next()

        console.log(ctx.url) //追踪溯源 问:api/login 在终端打印出自何处 就是出自这里  

        ctx.body = ctx.body? ctx.body : {
            code: ctx.state.code !== undefined ? ctx.state.code : 0,
            data: ctx.state.data !== undefined ? ctx.state.data : {},
            user_id:ctx.state.user_id !== undefined ? ctx.state.user_id : 0
        }
    }catch(e)
    {
        debug('Catch Error:%o',e)

        ctx.status = 200

        ctx.body = {
            code:-1,
            error: e && e.message ? e.message : e.toString()
        }
    }
}
