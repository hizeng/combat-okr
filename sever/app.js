const  Koa = require('koa');

const router = require('./routes/index.js');

const bodyParser = require('koa-bodyparser');

const app = new Koa();

const response = require('./middlewares/response.js');
const user = require('./middlewares/user.js');

app 
    .use(user)
    .use(response)
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)

