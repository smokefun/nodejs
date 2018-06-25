const cluster = require("cluster");
const http = require("http");
const os = require("os");

const cpus = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("process pid: " + process.pid);
    })
    .listen(8000);
}
