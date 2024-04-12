const multer = require('multer')
const moment = require('moment')

moment.locale('ru')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'materials/images/photos/')
    },
    filename(req, file, cb){
        cb(null, moment().format('DDMMYYYY-HHmmss_SSS') + '-' + file.originalname)
    }
})

const types = ['image/png', 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)) {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})