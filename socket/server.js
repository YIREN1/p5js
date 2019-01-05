const express = require('express');

const app = express();

const server = app.listen(3001);

const socket = require('socket.io');

const io = socket(server);

io.sockets.on('connection', (socket) => {
    console.log('Notice! New one!' + socket.id);
    socket.on('mouse', (data) => {
        // console.log(data);
        socket.broadcast.emit('mouse', data);
        //io.sockets.emit('mouse', data);
    })
});

app.use(express.static('public'));
console.log('server is running');
