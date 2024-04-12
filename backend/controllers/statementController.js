const Statement = require('../Models/Statement')

class StatementController{
    async createStatement(req, res) {
        try {
            const { name, phone, description } = req.body;
            const statement = new Statement({name, phone, description})
            await statement.save();
            res.status(201).json({message: 'Заявление успешно создано'})
        } catch (error) {
            console.log('backend createStatement: ' + error)
        }
    }
}

module.exports = new StatementController()