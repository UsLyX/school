const Schedule = require('../Models/Schedule')
const Classes = require('../Models/Class')
const Day = require('../Models/Day')
const Lesson = require('../Models/Lesson')
class ScheduleController{
    async getClasses(req, res) {
        try {
            const classes = await Classes.find({})
            res.send(classes)
        } catch (error) {
            console.log('backend getClasses: ' + error)
        }
    }
    async getDays(req, res) {
        try {
            const days = await Day.find({})
            res.send(days)
        } catch (error) {
            console.log('backend getDays: ' + error)
        }
    }
    async getLessons(req, res) {
        try {
            const lessons = await Lesson.find({})
            res.send(lessons)
        } catch (error) {
            console.log('backend getLessons: ' + error)
        }
    }

    async getCurrentSchedule(req, res) {
        const { selectedClass } = req.body;
        const currentSchedule = await Schedule.findOne({className: selectedClass});
        
        res.status(200).json(currentSchedule)
    }

    async scheduleUpdate(req, res) {
        const { selectedClass, selectedDay, selectedUrok, selectedLesson } = req.body;
        const currentSchedule = await Schedule.findOne({className: selectedClass});
        const currentDay = currentSchedule.classRasp.find(item => item.dayName === selectedDay);
        const currentLesson = currentDay.lessons.map((item, index) => index + 1 == selectedUrok[0] ? item = selectedLesson : item)
        currentDay.lessons = currentLesson;
        await currentSchedule.save()
        
        res.status(200).json({message: 'Изменения сохранены'})
    }
}

module.exports = new ScheduleController()