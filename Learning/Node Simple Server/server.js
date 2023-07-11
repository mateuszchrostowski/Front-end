const http = require('http');
const fs = require('fs');
const port = 4000;


const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error){
            res.writeHead(404)
            res.write('404: Not found')
        } else {
            res.write(data)
        }
        res.end();

    })

    res.write('Witaj w Node.js')
    res.end()
})


server.listen(port, function(error) {
    if (error) {
        console.log('Coś poszło nie tak');
    }
    console.log('Serwer działa i nasłuchuje na porcie ' + port);
})