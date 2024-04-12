const { model, Schema } = require('mongoose')

const Photo = new Schema({
    image: {type: String, require: true, unique: true}
})

module.exports = model('Photo', Photo)