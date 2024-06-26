const { model, Schema } = require('mongoose');

const ObjNew = new Schema({
    image: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, require: true},
    date: {type: Date, default: Date.now} 
})

module.exports = model('ObjNew', ObjNew)

