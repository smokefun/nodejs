const fs = require("fs");
const path = require("path");

const tinyFile = path.join(__dirname, "../src/tiny.file");
if (!fs.existsSync(tinyFile)) {
  console.log("Missing files! Did you run npm start ?");
  process.exit(1);
}

console.log("1");

fs.readFile(tinyFile, (err, lorem) => {
  if (err) {
    return console.error(err);
  }
  console.log("2");
  console.log(lorem.toString().slice(0, 200)); // by default, data returned is a buffer
});
// Usually things that have to talk to hard drives or networks will be asynchronous

console.log("3");
