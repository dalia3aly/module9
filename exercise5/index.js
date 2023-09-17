const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let users = {};  // { nickname: socket }

io.on('connection', function (socket) {
    socket.on('new user', function (data) {
        socket.nickname = data;
        users[socket.nickname] = socket;
        updateNicknames();
    });

    socket.on('chat message', function (msg) {
        socket.broadcast.emit('chat message', msg);
    });

    socket.on('disconnect', function (data) {
        if (!socket.nickname) return;
        delete users[socket.nickname];
        updateNicknames();
    });

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });

    function updateNicknames() {
        io.emit('userlist', Object.keys(users));
    }
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
