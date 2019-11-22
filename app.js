const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorPage = require('./routes/errorPage')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(errorPage)


app.listen(3000)