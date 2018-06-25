const zlib = require("zlib");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const smallFile = path.join(__dirname, "..", "src", "small.file");
if (!fs.existsSync(smallFile)) {
  console.log("Missing files! Did you run npm start ?");
  process.exit(1);
}
const encrypted = fs.createWriteStream(
  path.join(__dirname, "..", "dest", "encrypted.gz")
);
fs.createReadStream(smallFile)
  .pipe(zlib.createGzip()) // zlib.createGzip() is a built-in transform stream
  .on("data", data => process.stdout.write("."))
  .pipe(crypto.createCipher("aes192", "my_secret"))
  .pipe(encrypted)
  .on("finish", () => console.log("Done"));

// streams give us the power of composability in our code
