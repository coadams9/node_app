const http = require('http')


const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><h1>Hi my name is lil Bill</h1></body>')
        res.write('</html>')
        res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Blah</title></head>')
    res.write('<body><h1>Hi my name is lil Bill</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)
