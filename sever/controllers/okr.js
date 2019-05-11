const okrModel = require('./../models/okr.js');

const keyresultModel = require('./../models/keyresults.js');

const okrsController = {
    showOkrs: async (ctx,next)=>{
      console.log('showOkrs');

      try{

      let okrs = await okrModel.all()

      ctx.state.code = 200;

      ctx.state.data = okrs;

      }catch(err){
          console.log(err);
          ctx.body = err ;
      }
    },
    createOkr: async(ctx,next)=>{

        const data = ctx.request.body;

        try{

            let content = data.obj;

            let idArr = await okrModel.insert({content});

            let objId = idArr[0];

            await keyresultModel.insert({
                objId,
                content: data.keyResult
            })


            ctx.state.code = 200;


        }catch(err){
            console.log(err)
        }

    },
    deleteOkr: async(ctx,next)=>{

      const id = ctx.request.body.id;

      try{

        await okrModel.delete(id);

        ctx.state.code = 200;

        ctx.state.data = "删除成功";

      }catch(err){
        console.log(err);
        ctx.body = err;
      }

    },
    showOkrItem: async(ctx,next)=>{

      let id = ctx.query.id;

      try{

        let okrItem = await okrModel.select({id});

        ctx.state.code = 200;

        ctx.state.data = okrItem;


      }catch(err){

        console.log(err);

        ctx.body = err
      }


    },
    editOkr: async(ctx,next)=>{

      let id = ctx.request.body.id;

      let content = ctx.request.body.content;

      try{

        const data = await okrModel.update(id,{content});

        ctx.state.code = 200;

        ctx.state.data = data;

      }catch(err){

        console.log(err);

        ctx.body = err;
      }

    },


}
module.exports = okrsController;