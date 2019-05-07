const todoModel = require('./../models/todo.js');


const todoController = {
    showAll: async(ctx,next)=>{

        try{

            let todoInfo = await todoModel.all();

            ctx.state.code = 200;

            ctx.state.data = todoInfo;
    
        }catch(err){
            ctx.body = err

        }

    },
    createTodo: async (ctx,next) =>{

        try{
            let content = ctx.request.body.value;

            let createTime = new Date();

            if(content.length != 0){

                await todoModel.insert({content,createTime})
            };

            ctx.state.code = 200;

            ctx.state.data = content;



        }catch(err){

            console.log(err);

            ctx.body = err
        }

    },
    deleteTodo: async (ctx,next)=>{

        let id = ctx.request.body.id;

        try{

            await todoModel.delete(id);

            ctx.state.code = 200;

            ctx.state.data = "删除成功";

        }catch(err){
            console.log(err)
            ctx.body = err
        }

    },
    bindStatus: async(ctx,next)=>{

        let id = ctx.request.body.id;

        let status = ctx.request.body.status;

        try{
            await todoModel.update(id,{status})
        }catch(err){

            console.log(err)

            ctx.body = err
        }

    }

}

module.exports = todoController;