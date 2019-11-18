const html = require('./html')
console.log(html)

const requestHandler = (req, res) => {
    const url = req.url
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write(html)
    }
}


module.exports = requestHandler

