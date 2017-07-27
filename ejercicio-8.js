var http = require('http');
var info = [];

var url = process.argv[2];
http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
        info.push(data);
    });
    res.on('error', console.error);
    res.on('end', function() {
        console.log(info.join('').length);
        console.log(info.join(''));
    });
});