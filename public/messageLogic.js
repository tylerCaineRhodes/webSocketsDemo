var socket = io.connect('http://localhost:4000/');

let message = document.getElementById('message'),
 handle = document.getElementById('handle'),
 button = document.getElementById('send'),
 output = document.getElementById('output'),
 feedback = document.getElementById('feedback');


button.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value, 
    handle: handle.value
  });
})

message.addEventListener('keypress', () => {
  socket.emit('typing', {
    handle: handle.value
  })
})

socket.on('chat', (data) => {
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>'
  message.value = "";
  feedback.innerHTML  = "";
});

socket.on('typing', (data) => {
  feedback.innerHTML = '<p><em>'+ data.handle + ' is typing...</em></p>';
});