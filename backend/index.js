const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
const userRouter = require('./routers/userRouter')
const newsRouter = require('./routers/newsRouter')
const materialRouter = require('./routers/materialRouter')
const statementRouter = require('./routers/statementRouter')
const scheduleRouter = require('./routers/scheduleRouter')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use('/materials', express.static('materials'))

app.use(express.json())
app.use("/login", authRouter)
app.use("/user", userRouter)
app.use("/news", newsRouter)
app.use("/material", materialRouter)
app.use("/statements", statementRouter)
app.use("/schedule", scheduleRouter)


const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://asalnikov07:H0rlR5NT3rjpG4VH@cluster0.0otgaue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()