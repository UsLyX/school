const { model, Schema } = require('mongoose')

const Statement = new Schema({
    name: {type: String, require: true},
    phone: {type: String, require: true},
    description: {type: String, require: true}
})

module.exports = model('Statement', Statement)