var express = new require('express');  // requerire express server

var app = express();
var server = app.listen(3000);   // set express server to listen to 3000 port



app.use(express.static('public'));  // set public folder of the server (satic not changeble resurses)

var io = require('socket.io')(server);            // create socket for this server

var chat = io.of('chat').on('connection', newConection); //using namespaces 
//io.sockets.on('connection', newConection);  // set up new websocket connection

var delay_chat = io.of('delay').on('connection', Volatile_message);

function Volatile_message(socket){
         console.log('new delay connection: '+ socket.id);
//socket.on('bieber tweet', mouseMsg);
function mouseMsg(data){

  //   var tweets = setInterval(function () {
 //     socket.volatile.emit('bieber tweet', data);
 // }, 100);
 //   socket.on('disconnect', function () {
////    clearInterval(tweets);
//  });
}



}

function newConection(socket){
    console.log('new connection: '+ socket.id);

    socket.on('mouse', mouseMsg); // server is weiting for event called mouse. Then run mouseMgs function

    function mouseMsg(data){
    //    console.log(from);
        socket.broadcast.emit('mouse', data);  // broadcast message to everyone clients exept this one
        // io.socket.emit('mouse', data);  //send message to perticuar client 
          console.log(data);
    }
}


console.log("My scket server is running");