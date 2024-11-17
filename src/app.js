require('dotenv').config()
const express = require('express')
const path = require("path")
const configViewEngine = require("./config/viewEngine")
const webRouter = require("./routes/web")
const connection = require("./config/database")


// app
const app = express()

const port = process.env.PORT || 8888

configViewEngine(app);

app.use('/',webRouter)

connection()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})