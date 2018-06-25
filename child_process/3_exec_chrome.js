const { exec } = require("child_process");

exec("google-chrome --app github.com", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
