const express = require ('express')
require('dotenv').config()
const {dbConnection} =  require('./database/config');
const http = require('http');
const {Server}  = require('socket.io');

const app = express();

const server =  http.createServer();
const io = new Server(server, {
    cors: {origin: '*'}
}); 

dbConnection();
app.use(express.json())
app.use('/api/user' , require('./routes/user'))



//Funcionalidad de sockets para chat
io.on('connection', (socket) => {
    console.log('conectado')
    socket.broadcast.emit('chat_message', {
        usuario: 'INFO',
        mensaje: 'Se ha conectado un nuevo usuario'
    });
    socket.on('chat_message', (data) => {
        io.emit('chat_message' , data)
    });
});


//Se abre en un server distinto porque en el mismo que el de app. No funciona, manda error 404
server.listen(3000)
app.listen(process.env.PORT, ()  =>{
    console.log('servidor corriendo en puerto', process.env.PORT)
})