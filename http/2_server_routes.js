const server = require("http").createServer();
const fs = require("fs");
const path = require("path");

const LOREM_PATH = path.join(__dirname, "..", "src", "tiny.file");
if (!fs.existsSync(LOREM_PATH)) {
  console.log("Missing files! Did you run npm start ?");
  process.exit(1);
}

server
  .on("request", function(req, res) {
    if (req.method === "GET") {
      if (req.url === "/lorem") {
        // serve files; can be text, image, video,...
        res.writeHead(200);
        fs.createReadStream(LOREM_PATH).pipe(res);
      } else {
        res.writeHead(200);
        res.end("<html><body><h1>Hello world from server</h1></body></html>");
      }
    }
  })
  .listen(3000);
