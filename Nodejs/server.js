const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content type
    res.setHeader('Content-Type', 'text/html')

    res.write('<b>hello, ninjas</b>')
    res.end()

})

server.listen(3000,'localhost', () => {
    console.log('listening on requests on port 3000')
})



