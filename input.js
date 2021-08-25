let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    console.log("User input terminated")
    process.exit();
  }  
  if (data === "w") {
    connection.write('Move: up')
  }
  if (data === "a") {
    connection.write('Move: left')
  }
  if (data === "s") {
    connection.write('Move: down')
  }
  if (data === "d") {
    connection.write('Move: d')
  }
  if (data === "i") {
    connection.write('Say: Iz my block!!')
  }
  if (data === "o") {
    connection.write('Say: i haz block')
  }
  if (data === "p") {
    connection.write('Say: Nom Nom Nom')
  }
  if (data === "l") {
    connection.write('Say: i eat snek?')
  }
  if (data === "k") {
    connection.write('Say: soo many sneks')
  }
  // console.log(data)
}

module.exports = {
  setupInput  
}
