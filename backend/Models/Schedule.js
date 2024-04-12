const { model, Schema } = require('mongoose');

const Schedule = new Schema({
    className: {type: String, ref: 'Class'},
    classRasp: [{
       dayName: {type: String, ref: 'Day'},
       lessons: [{type: String, ref: 'Lesson'}]
    }]
})

module.exports = model('Schedule', Schedule)