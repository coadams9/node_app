const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorPage = require('./routes/errorPage')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)
app.use(errorPage)


app.listen(3000)