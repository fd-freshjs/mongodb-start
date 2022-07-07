const { Server } = require("socket.io");
const { createMsg } = require('./services/msg.service');
const { wsEventTypes } = require('./constants');

module.exports = (httpServer) => {
  // io это сервер-слушатель
  const io = new Server(httpServer, {
    // options
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  io.on("connection", (socket) => {
    // socket это конкретный пользователь

    console.log("some user has connected");

    // отправить конкретному пользователю
    // socket.emit()

    socket.on(wsEventTypes.CREATE_MESSAGE, async (data) => {
      // save to DB
      const createdMsg = await createMsg(data);

      console.log('create msg', createdMsg);
      // socket.broadcast()
      io.emit(wsEventTypes.NEW_MESSAGE, createdMsg);

    });
  });
};
