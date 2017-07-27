var filter  = require('./module.js');
var dir     = process.argv[2];
var ext     = process.argv[3];

filter(dir, ext, function(err, filteredList) {

    for (var i = 0; i < filteredList.length; i++) {
        console.log(filteredList[i]);
    }

});