const  Koa = require('koa');

const router = require('./routes/index.js');

const app = new Koa();

const response = require('./middlewares/response.js');

app 
    .use(response)
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)