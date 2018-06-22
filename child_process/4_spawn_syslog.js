const spawn = require("child_process").spawn;

const child = spawn("tail", ["-f", "/var/log/syslog"]);
child.stdout.on("data", data => console.log("" + data)); // stdout
