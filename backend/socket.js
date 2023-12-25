const socketIO = require("socket.io");

const configureSocket = (server) => {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("disconnect"),
      () => {
        console.log("Disconnected");
      };
  });
};

module.exports = configureSocket;
