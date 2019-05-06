const todoModel = require('./../models/todo.js');


const todoController = {
    showAll: async(ctx,next)=>{

        try{

            let todoInfo = await todoModel.all();

            ctx.state.code = 200;

            ctx.state.data = todoInfo;

            console.log(todoInfo);
    
        }catch(err){
            ctx.body = err

        }

    }

}

module.exports = todoController;