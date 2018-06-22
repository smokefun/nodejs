const exec = require("child_process").exec;
const spawn = require("child_process").spawn;

exec("find ~/ -type f | wc -l", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  }
  console.log(`files in home : ${stdout}`);
});
