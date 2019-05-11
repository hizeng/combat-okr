const router = require('koa-router')({
  prefix: '/'
})

const indexController = require('../controllers/index.js');
const testController = require('../controllers/test.js');
const loginController = require('../controllers/login.js');
const todoController = require('../controllers/todo.js');
const keyresultsController = require('../controllers/keyresults.js');

const okrsController = require('../controllers/okr.js');

const pageController = require('../controllers/page.js');

const cors = require('./../middlewares/cors');
const userMiddlerware = require('./../middlewares/user.js');

router.get('/', indexController.indexRender)
router.get('api/isbn',testController.info)

// 用户登录
router.post('api/login',loginController.login)

router.get('api/testapi',loginController.testapi)

router.get('api/pageapi',pageController.showSomething)

router.get('api/todo',todoController.showAll);


router.post('api/todo',todoController.createTodo);

// router.delete('api/todoStatus',todoController.deleteTodo);

router.delete('api/todo/:id',todoController.deleteTodo);

router.put('api/bindstatus',todoController.bindStatus);

router.get('api/keyresults',keyresultsController.showKeyResults);

router.put('api/bindkeyresult',keyresultsController.bindKeyResults);

router.post('api/keyresults',keyresultsController.createKeyResults);

router.delete('api/keyresults/:id',keyresultsController.deleteKeyResultItem)

router.get('api/okr',okrsController.showOkrs);

router.put('api/okr/:id',okrsController.editOkr);

router.post('api/okr',okrsController.createOkr);

router.delete('api/okr/:id',okrsController.deleteOkr);

router.get('api/okr/:id',okrsController.showOkrItem);




// 获取 Todo 接口，GET： /api/todo
// 添加 Todo 接口，POST：/api/todo
// 修改 Todo 接口，PUT： /api/todo/:id
// 删除 Todo 接口，DELETE：/api/todo/:id


module.exports = router