const net = require("net");
const {connect} = require('./client'); //same as const connect = require('./client').connect;

console.log("Connecting ...");
connect();



// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput(data));
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    console.log("User input terminated")
    process.exit();
  }
  console.log(data)
}


// stdin.on('data', (key) => {
//   if (key === '\u0003') {
//     console.log("Terminate key pressed");
//     process.exit();
//   }  
//   process.stdout.write('.');
// });
