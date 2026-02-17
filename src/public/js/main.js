console.log('chat va aquí');
//const socket = io();
$(function(){
    // alert('works!');

    //Conección de socket del CLIENTE..
    const socket = io();
    console.log('$ function');

    // obtaining DOM elements from the interface
    const $messageForm = $('#messageform');
    console.log('$messageForm',$messageForm);
    const $messageBox = $('#message');
    const $chat = $('#chat');

    // events
    $messageForm.submit( e =>{
        e.preventDefault();
        console.log('enviando datos');

        //chat-GPT
        const message = $messageBox.val();
        console.log(message);
        
        
        //enviamos datos desde la conección socket.emit('<nombre del elemento>',elementoConInformación):
        socket.emit('send message',message);
        $messageBox.val(''); // limpiar input


    });

    socket.on('new message',function(data){
        $chat.append(data + '<br/>');
    });

})