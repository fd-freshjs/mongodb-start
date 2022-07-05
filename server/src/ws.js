const { Server } = require("socket.io");

module.exports = (httpServer) => {

  // io это сервер-слушатель
  const io = new Server(httpServer, {
    // options
  });

  io.on('connection', (socket) => {
    // socket это конкретный пользователь

    console.log('some user has connected');

    socket.on('hello', () => {
      console.log('кто то сказал привет');
    });
  });
}
