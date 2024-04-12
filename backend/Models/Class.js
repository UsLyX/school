const { model, Schema } = require('mongoose');

const Class = new Schema({
    className: {type: String, unique: true}, 
})

module.exports = model('Class', Class)