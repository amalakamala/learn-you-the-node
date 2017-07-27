const http = require('http');

var server = http.createServer(function(req, res) {
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        body+=chunk;
    })

    req.on('end', function(){
        res.end(body.toUpperCase());
    })

});
server.listen(process.argv[2]);