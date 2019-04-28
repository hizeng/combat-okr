const userMiddleware = {
    isLogin:function(ctx,next){
        
        next()
    }
}
module.exports = userMiddleware;