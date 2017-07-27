const net = require('net');
const portNumber = process.argv[2] || 8000;

/*
cont = variable constante
let = declara una variable de alcance local, la cual, opcionalmente, puede ser inicializada con algún valor
*/
let date = new Date();
let month = zeroCheck(date.getUTCMonth() + 1);
let monthDate = zeroCheck(date.getDate());
let hours = zeroCheck(date.getHours());
let minutes = zeroCheck(date.getMinutes());

function zeroCheck(moment){
	return moment < 10 ? "0" + moment : moment;
}

let formattedDate = date.getFullYear() + "-" + month  + "-" + monthDate + " " + hours + ":" + minutes ;

const server = net.createServer((socket) => {
  socket.write(formattedDate);
  socket.end("\n");

}).on('error', (err) => {
  // throw = Lanza una excepcion definida por el usuario.
  throw err;
});


server.listen(portNumber);