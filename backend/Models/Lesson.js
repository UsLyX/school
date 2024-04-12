const { model, Schema } = require('mongoose');

const Lesson = new Schema({
   lessonName: {type: String, unique: true, default: 'Нет урока'}
})

module.exports = model('Lesson', Lesson)