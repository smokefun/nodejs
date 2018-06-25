const fs = require("fs");
const http = require("http");
const path = require("path");
const readline = require("readline");

const create = (lines, dest) => {
  const rs = require("stream").Readable();
  let i = 0;
  rs._read = () => {
    rs.push(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n"
    );
    if (++i === lines) {
      rs.push(null);
    }
  };

  return new Promise((resolve, reject) => {
    console.log("creating " + dest);
    rs.pipe(fs.createWriteStream(dest)).on("finish", () => {
      console.log("finished creating " + dest);
      resolve();
    });
  });
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(
  "This task requires 4gb of empty space. Do you wish to continue ? (yes/no) ",
  answer => {
    answer = answer.toLowerCase();
    if (answer !== "yes" && answer !== "y") {
      console.log("Terminating task");
      process.exit(0);
    } else {
      Promise.all([
        create(20, path.join(__dirname, "src/tiny.file")),
        create(1e6, path.join(__dirname, "src/small.file")),
        create(2e7, path.join(__dirname, "src/big.file"))
      ]).then(() => rl.close());
    }
  }
);
