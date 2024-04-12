const Router = require('express')
const newsMiddleware = require('../middleware/news')
const newsController = require('../controllers/newsController')
const ObjNew = require('../Models/New')

const router = new Router();

router.get('/get', newsController.get)
router.get('/:id', newsController.currentNew)

router.post('/create', newsMiddleware.single('newImg'), newsController.create)

module.exports = router