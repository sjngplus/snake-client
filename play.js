const net = require("net");
const {connect} = require('./client'); //same as----> const connect = require('./client').connect;
const {setupInput} = require('./input'); //same as----> const setupInput = require('./input').setupInput;

console.log("Connecting ...");
connect();

setupInput();
