const fs = require("fs");
const { Writable } = require("stream");

const ws = Writable({
  write: (chunk, encoding, callback) => {
    console.log(chunk.toString());
    callback(); // has to be called after we've done processing the data chunk
    // signals if the write was successful or not
    // to signal a failure, call the callback with an error object
  }
});

if (!fs.existsSync("src/tiny.file")) {
  console.log("Missing files! Did you run npm start?");
  process.exit(1);
}
fs.createReadStream("src/tiny.file").pipe(ws);
