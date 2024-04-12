const Router = require('express')
const router = new Router()
const scheduleController = require('../controllers/scheduleController')

router.get('/classes', scheduleController.getClasses)
router.get('/days', scheduleController.getDays)
router.get('/lessons', scheduleController.getLessons)

router.post('/', scheduleController.getCurrentSchedule)


router.patch('/update', scheduleController.scheduleUpdate)

module.exports = router