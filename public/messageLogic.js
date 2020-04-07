var socket = io.connect('http://localhost:4000/');

let message = document.getElementById('message');
let handle = document.getElementById('handle');
let button = document.getElementById('send');
let output = document.getElementById('output');


button.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value, 
    handle: handle.value
  });
})

socket.on('chat', (data) => {
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>'
  handle.value = "";
  message.value = "";
});