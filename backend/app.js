const express = require('express')
const app = express()
const config = require('./config')
const mongoose = require('mongoose')
const cors = require('cors')

const apiController = require('./controllers/apiController') 
const setupController = require('./controllers/setupController')

const port = process.env.PORT || 8000
app.use(cors())

mongoose.connect(config.getDbConnectionString(), {useNewUrlParser: true})

setupController(app)
apiController(app)

app.listen(port)