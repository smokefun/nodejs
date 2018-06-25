console.log("process.env:");
console.log(process.env); // environment variables
console.log(`process.argv: ${process.argv}`); // arguments passed to process
console.log(`process.arch: ${process.arch}`);
console.log(`process.pid: ${process.pid}`); // pid of the process
console.log(`process.platform: ${process.platform}`); // linux
process.chdir("./process"); // this will change the current working directory of the node process
console.log(`process.cwd(): ${process.cwd()}`); // current working directory (of process)
require("child_process")
  .fork("child.js")
  .on("message", msg => console.log(msg));
console.log("process.cpuUsage():");
console.dir(process.cpuUsage());
console.log("process.release:");
console.log(process.release);
console.log(`process.title: ${process.title}`);
process.stdout.write("Hello world from process.stdout\n");
process.nextTick(() => console.log("callback from process.nextTick()"));
console.log(`process.version: ${process.version}`);
console.log("process.versions:");
console.log(process.versions);
process.on("exit", code => {
  console.log("about to exit with code: " + code);
});
setTimeout(() => {
  console.log(`process.uptime: ${process.uptime()}`); // number of seconds the process has been running
  process.exit(1);
}, 1000);
