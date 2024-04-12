const Router = require('express')
const router = new Router()
const controller = require('../controllers/userController')

router.post('/info', controller.info)

module.exports = router