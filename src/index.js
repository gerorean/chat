const http = require('http');
const path = require('path'); // Modulo que une directorios / rutas usando join 


const express = require('express');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
// const io = socketio.listen(server); // Forma antigua // TypeError: socketio.listen is not a function
const { Server } = require("socket.io"); // Forma actual de socket.io
const io = new Server(server); // Web sockets.. "io"


// Settings
app.set('port', process.env.PORT || 3000);


require('./sockets')(io);

// http://localhost:3000/socket.io/socket.io.js
// io.on('connection', socket => {
//   console.log('new user connected');
// });  se saco aparte en socket.js



// console.log('__dn',__dirname);
// Metodo de path ".join" une con / o \ la ruta: n ... __dirname constante de nodeJS con la ruta del origen
console.log('__dn',path.join(__dirname,'public'));


// Static files...
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));


// Starting the server...
// app.listen(3000,() => {
server.listen(app.get('port'), () => {
    console.log('server on port ',app.get('port'));
});
console.log('express.use...',express.use);
console.log('express.static...',express.static);