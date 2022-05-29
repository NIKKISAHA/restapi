import express from 'express'
const app = express()

import users from './userroute.js'


const PORT = 3333

app.use(express.json())

app.use("/ok", users)

app.listen(PORT,()=>{
    console.log(`it is running ${PORT}`)
})

