import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import sendEmailRoute from './routes/sendEmailRoute.js'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())

app.use(express.json())

app.use('/api', sendEmailRoute)

app.get("/", (req, res) => {
    console.log("Server is running")
    res.send("Server is running")
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
})