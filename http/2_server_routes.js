const server = require("http").createServer();
const fs = require("fs");
const path = require("path");

const IMAGE_PATH = path.join(__dirname, "../temp/puppy.jpg");

server
  .on("request", function(req, res) {
    if (req.method === "GET") {
      if (req.url === "/dog") {
        // serve files
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fs.readFile(IMAGE_PATH, (err, file) => {
          res.end(file);
        });
        // or use stream TODO
      } else {
        res.writeHead(200);
        res.end("<html><body><h1>Hello world from server</h1></body></html>");
      }
    }
  })
  .listen(3000);
