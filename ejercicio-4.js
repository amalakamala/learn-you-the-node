//cargar módulo
var fs = require('fs');
var recorrido = process.argv[2];

fs.readFile(recorrido, 'utf8', function(err,data) {
  var linia = data.split('\n');
  console.log(linia.length-1);
});