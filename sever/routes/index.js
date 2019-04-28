const router = require('koa-router')({
  prefix: '/'
})

const indexController = require('../controllers/index.js');
const testController = require('../controllers/test.js');

const loginController = require('../controllers/login.js');

const cors = require('./../middlewares/cors');



router.get('/', indexController.indexRender)
router.get('api/isbn',testController.info)

// 用户登录

router.post('api/login',loginController.login)

module.exports = router