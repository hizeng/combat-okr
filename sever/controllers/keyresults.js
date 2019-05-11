const resultModel = require('./../models/keyresults.js');

const todoModel = require('./../models/todo.js');

const keyresultsController = {
    showKeyResults:async (ctx,next)=>{

        try{
            let keyresults = await resultModel.all();
            ctx.state.code = 200;
            ctx.state.data = keyresults;
        }catch(err){
            console.log(err);
            ctx.body = err

        }

    },
    bindKeyResults:async(ctx,next)=>{        

        try{

            let data = ctx.request.body;

            let krId = data.keyresultId;

            await todoModel.update(data.todoId,{krId});

            ctx.state.code = 200;

            console.log(data);


        }catch(err){
            console.log(err);

            ctx.body = err
        }
    },
    createKeyResults:async(ctx,next)=>{
        
        try{

            console.log(ctx.request.body);

            let objId = ctx.request.body.objId;

            const keyResult = await resultModel.insert({objId});

            ctx.state.code = 200;

            ctx.state.body = keyResult;

        }catch(err){

            console.log(err);

            ctx.body = err;
        }
    },

    deleteKeyResultItem:async(ctx,next)=>{
        try{

            let id = ctx.request.body.id;

            const deleteKeyResultItem = await resultModel.delete(id);

            ctx.state.code = 200;

            ctx.state.data = deleteKeyResultItem;

        }catch(err){

            console.log(err);

            ctx.body = err;
        }
    }












}

module.exports = keyresultsController;