const Router = require('express')
const materialController = require('../controllers/materialController')
const photosMiddleware = require('../middleware/photos')
const videosMiddleware = require('../middleware/videos')

const router = new Router();

router.get('/photo', materialController.getPhoto)
router.get('/video', materialController.getVideo)

router.post('/photo/create', photosMiddleware.single('photo'), materialController.photoCreate)
router.post('/video/create', videosMiddleware.single('video'), materialController.videoCreate)


module.exports = router