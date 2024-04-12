const { model, Schema } = require('mongoose');

const Day = new Schema({
    dayName: {type: String, unique: true},
})

module.exports = model('Day', Day)