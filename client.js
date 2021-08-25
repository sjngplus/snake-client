const net = require('net');
const {IP, PORT} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const serverConnectionObject = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  serverConnectionObject.setEncoding("utf8");

  serverConnectionObject.on('connect', () => {
    console.log("Connection with server established");
    serverConnectionObject.write('Name: zZZ');
    // serverConnectionObject.write('Move: up');
    // serverConnectionObject.write('Move: left');
    // serverConnectionObject.write('Move: down');
    // serverConnectionObject.write('Move: right');
  })

  serverConnectionObject.on('data', (data) => {
    console.log(data);
  })  
  

  return serverConnectionObject;
};

module.exports = {
  connect
}