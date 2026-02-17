// Se engloba todo en una función que se pueda exportar y que tenga un parametro

module.exports = function(io) {


    //Conección de socket del SERVIDOR...
    io.on('connection', socket => {
      console.log('new user connected');

      //Socket Preparate para recibir datos del CLIENTE
      socket.on('send message', function(data){
        console.log(data);

        //Socket tetransmitelo a todos con emit.. con el evento new message
        io.sockets.emit('new message', data);


      })

    });
}

 