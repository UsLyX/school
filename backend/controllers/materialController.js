const Photo = require('../Models/Photo')
const Video = require('../Models/Video')

class MaterialController {
    async getPhoto(req, res) {
        try {
            const photo = await Photo.find({});
            res.send(photo)
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка при получении фотографий'}) 
        }
    }
    async getVideo(req, res) {
        try {
            const video = await Video.find({});
            res.send(video)
        } catch (error) {
            console.log(error)
            res.status(400).json({message: 'Ошибка при получении видеоматериалов'}) 
        }
    }

    async photoCreate(req, res) {
        const photo = new Photo({
            image: req.file.path, 
        })
        try {
            await photo.save()
            res.status(201).json({message: 'Фотография загружена'})
        } catch (error) {
            console.log(error)
        }
    }
    async videoCreate(req, res) {
        const video = new Video({
            video: req.file.path, 
        })
        try {
            await video.save()
            res.status(201).json({message: 'Видео загружено'})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new MaterialController()