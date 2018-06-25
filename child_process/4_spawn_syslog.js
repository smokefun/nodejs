const { spawn } = require("child_process");
const fs = require("fs");

const syslog = "/var/log/syslog";
if (!fs.existsSync(syslog)) {
  console.log(
    "It seems syslog does not exist. Try editing syslog path with an existing log file."
  );
  process.exit(1);
}

const child = spawn("tail", ["-f", "/var/log/syslog"]);
child.stdout.on("data", data => console.log("" + data));
child.stdout.on("error", data => console.error("" + data));
