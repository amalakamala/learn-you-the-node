var fs = require('fs');
var recorrido = require('path');
var dirc = process.argv[2];
var ext1 = '.' +process.argv[3]
fs.readdir(dirc, function(err, files){
  if(err){
    throw err
  }
  //console.log(files);
  files.forEach(function(filename){
    var ext = recorrido.extname(filename);
    if(ext === ext1){
      console.log(filename);
    }
  });
});