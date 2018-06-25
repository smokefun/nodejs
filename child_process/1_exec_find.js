const { exec, spawn } = require("child_process");

const command = "find . -type f | wc -l";
console.time(command);
exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`files in current process folder : ${stdout}`);
  console.timeEnd(command);
});
