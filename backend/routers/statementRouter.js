const Router = require('express')
const statementController = require('../controllers/statementController')

const router = new Router();

router.post('/create', statementController.createStatement)

module.exports = router