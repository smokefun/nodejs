const { exec } = require("child_process");

exec("node child_process/child.js", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(stdout);
});
