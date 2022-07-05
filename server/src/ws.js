const { Server } = require("socket.io");

const eventTypes = {
  HELLO: "hello",
  NEW_MESSAGE: 'newMessage',
};

module.exports = (httpServer) => {
  // io это сервер-слушатель
  const io = new Server(httpServer, {
    // options
    cors: {
      origin: ["http://localhost:3000/"],
    },
  });

  io.on("connection", (socket) => {
    // socket это конкретный пользователь

    console.log("some user has connected");
    socket.emit(eventTypes.HELLO, { data: "test" });

    socket.on(eventTypes.HELLO, (data) => {
      console.log("кто то сказал", data);
    });


    setTimeout(() => {
      socket.emit(eventTypes.NEW_MESSAGE, { body: 'hello msg', _id: '123' })
    }, 2000);
  });
};
