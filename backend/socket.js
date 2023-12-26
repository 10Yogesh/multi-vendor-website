const { Server } = require("socket.io");

const configureSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: "http://localhost:5173" },
  });

  io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("create-something", (args) => {
      console.log("Create-something :", args);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });
  });
};

module.exports = configureSocket;
