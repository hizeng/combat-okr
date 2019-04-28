const debug = require('debug')('koa-app')

module.exports = async function(ctx,next){
    try {
        await next()

        console.log(ctx.url)

        ctx.body = ctx.body? ctx.body : {
            code: ctx.state.code !== undefined ? ctx.state.code : 0,
            data: ctx.state.data !== undefined ? ctx.state.data : {}
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
