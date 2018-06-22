const fs = require("fs");

console.log(__dirname);
fs.readdir("./", (err, files) => {
  console.log(files); // files of the place where you called node
});
