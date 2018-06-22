// process is an instance of EventEmitter
process.on("exit", code => {
  console.log("about to exit with code: " + code);
});

process.exit(1);
