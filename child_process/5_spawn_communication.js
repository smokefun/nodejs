const spawn = require("child_process").spawn;

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

find.stdout.pipe(wc.stdin);

wc.stdout.on("data", data => {
  console.log(`Number of files ${data}`);
});
