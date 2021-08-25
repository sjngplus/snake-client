const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const serverConnectionObject = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });

  // interpret incoming data as text
  serverConnectionObject.setEncoding("utf8");

  return serverConnectionObject;
};

console.log("Connecting ...");
connect();
