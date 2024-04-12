const multer = require('multer')
const moment = require('moment')

moment.locale('ru')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'materials/videos/')
    },
    filename(req, file, cb){
        cb(null, moment().format('DDMMYYYY-HHmmss_SSS') + '-' + file.originalname)
    }
})

const types = ['video/mp4', 'video/webm', 'video/mpeg']

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)) {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})