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

module.exports = {
  setupInput  
}
