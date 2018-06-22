const fs = require("fs");
const path = require("path");

const file = fs.createWriteStream(path.join(__dirname, "../dest/big.txt"));

for (let i = 0; i <= 1e6; i++) {
  file.write(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n"
  );
}

file.end();
