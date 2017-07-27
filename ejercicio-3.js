//cargar módulo
var fs = require('fs');

var archivo = process.argv[2];
var contador = 0,
strBuffer

var strBuffer = fs.readFileSync(archivo, 'utf8');
strBuffer = strBuffer.replace(/\n+$/, ''); //espacio
strBuffer = strBuffer.split('\n'); //ultima linea
contador = strBuffer.length-1; //menos 1

console.log(contador);

