const fs = require("fs");
const path = require("path");

console.log("1");

const bookPath = path.join(__dirname, "../temp/alice.txt");

fs.readFile(bookPath, (err, alice) => {
  console.log("2");
  console.log("" + alice.slice(0, 200));
});
// Usually things that have to talk to hard drives or networks will be asynchronous

console.log("3");
