const path = require('path')
const express = require('express')
const router = express.Router()

const rootDir = require('../utilities/path')


router.use((req, res, next) => {
    res.render('error-page', { pageTitle: 'Page Not Found', path: '' })
})

module.exports = router