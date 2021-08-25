const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const serverConnectionObject = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });

  // interpret incoming data as text
  serverConnectionObject.setEncoding("utf8");

  serverConnectionObject.on('connect', () => {
    console.log("Connection with server established");
  })

  serverConnectionObject.on('data', (data) => {
    console.log(data);
  })  
  

  return serverConnectionObject;
};

module.exports = {
  connect
}