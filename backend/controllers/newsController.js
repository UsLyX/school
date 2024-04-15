const ObjNew = require('../Models/New')

class newsController{
    async get(req, res) {
        try {
            const news = await ObjNew.find({});
            console.log(news)
            res.send(news);
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка при получении новостей'}) 
        }
    }

    async currentNew(req, res) {
        try {
            const id = req.params.id;
            const currentNew = await ObjNew.findOne({_id: id});
            res.send(currentNew);
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка при получении новости'}) 
        }
    }

    async create (req, res) {
        const objNew = new ObjNew({
            image: req.file.path, 
            title: req.body.title,
            description: req.body.description
        })
        try {
            await objNew.save()
            res.status(201).json(objNew)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new newsController()