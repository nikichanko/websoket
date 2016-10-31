var socket;
var new_socket;

function setup(){
    socket = io.connect('http://localhost:3000/chat'); // new socket connection for web server on port 3000 with namespace chat
    new_socket  = io.connect('http://localhost:3000/delay'); // new socket connection for web server on port 3000 with namespace chat

    socket.on('mouse', newdraw);   // client get message from server with socket and weit for 'mouse' event. Then run newdraq which will be send to server
    // which will broadcast to evry client exept this one;
    new_socket.on('bieber tweet', getBieberTweet);
}

function getBieberTweet(data){
    console.log(data);
}

function newdraw(data){
    console.log('newx: '+ data.x + ' newy: '+ data.y);
}

function draw(event){
    console.log('x: '+ event.clientX + ' y: '+ event.clientY);
    var data = {
        x: event.clientX,
        y: event.clientY
    }
    socket.emit('mouse', data); // when draw function is runnig send data object to server with event called mouse
    new_socket.emit('bieber tweet', {niki:'1124'});
}

setup(); 
document.addEventListener('click', function(event){
    draw(event);
});