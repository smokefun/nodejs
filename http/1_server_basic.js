const server = require("http").createServer();

server
  .on("request", function(req, res) {
    res.writeHead(200);
    res.end("<html><body><h1>Hello world from server</h1></body></html>");
  })
  .listen(3000);
