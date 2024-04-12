const {Schema, model} = require('mongoose')


const User = new Schema({
    name: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    login: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, ref: 'Role'}]
})


module.exports = model('User', User)