const { model, Schema } = require('mongoose')

const Video = new Schema({
    video: {type: String, require: true}
})

module.exports = model('Video', Video)