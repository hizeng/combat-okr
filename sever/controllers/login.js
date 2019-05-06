const requestModel = require('./../models/request')

const userModel = require('./../models/user')

const authCode = require('./../utils/authCode.js')

const loginController = {
     login: async(ctx,next)=>{

          let code = ctx.request.body.code;

          let info = await requestModel.authCode(code);

          let openid = info.openid ;

          let obj = await userModel.select({openid});

          if(obj.length == 0){

          try{
               const userArr = await userModel.insert({openid});

               user_id = userArr[0];

          }catch(err){

               ctx.body = err;
          }

          }
          else{
               user_id = obj[0].id;
          }

          let authIdCode = user_id.toString();

          authIdCode = authCode(authIdCode,'ADDCODE');

          ctx.state.code = 200;

          ctx.state.user_id = authIdCode;
    
     },
     testapi:async (ctx,next)=>{
          let req_headers = ctx.headers;

          let user_token = req_headers.token;

          let user_id =  authCode(user_token.toString(),'DECODE');

          ctx.state.user_id = user_id;

          console.log(user_id);
     }
}
module.exports = loginController