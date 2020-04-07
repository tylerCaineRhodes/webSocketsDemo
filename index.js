let express = require('express');
let socket = require('socket.io');

let app = express();
let port = 4000;
let server = app.listen(port, () => {
  console.log('you\'re connected to port 4000!')
});


app.use(express.static('public')); 

let io = socket(server); //activate socket io on server

io.on('connection',(socketId) => {
  console.log('connected to a web socket -->', socketId.id)

  socketId.on('chat', (data) => { 
    io.sockets.emit('chat', data); 
  });

  socketId.on('typing', (data) => {
    socketId.broadcast.emit('typing', data)
  })
});

