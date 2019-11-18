const html = require('./html')
console.log(html)

const requestHandler = (req, res) => {
    const url = req.url
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write(html)
        res.end()
    }
    if (url === '/create-user') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split('=')[1])
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    }
}


module.exports = requestHandler

