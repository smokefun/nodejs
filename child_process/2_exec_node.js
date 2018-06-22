const exec = require("child_process").exec;

exec("node child.js", (err, stdout, stderr) => {
  console.log(stdout);
});
