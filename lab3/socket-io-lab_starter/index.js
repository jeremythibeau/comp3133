var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('someone connected');
    socket.on('disconnect', function(){
        console.log('user disconnected')
    })
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
    })
})

io.on('connection', function(socket){
    socket.broadcast.emit('hi')
})



http.listen(8080, function(){
    console.log('listening on port 8080')
})