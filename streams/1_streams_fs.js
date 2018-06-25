const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "src");
const bigFile = path.join(src, "big.file");
const smallFile = path.join(src, "small.file");
if (!fs.existsSync(bigFile) || !fs.existsSync(smallFile)) {
  console.log("Missing files! Did you run npm start ?");
  process.exit(1);
}

const start = filename => console.log(`copying ${filename}...`);
const end = filename => console.log(`finished copying ${filename}`);

const destFolder = path.join(__dirname, "../dest");
// syncCopy(smallFile, `${destFolder}/small.file`, 2);
// asyncCopy(smallFile, `${destFolder}/small.file`, 2); // not blocking, but consumes memory
// asyncCopy(bigFile, `${destFolder}/big$.file`, 1); // error due to size exceeding memory
// streamCopy(bigFile, `${destFolder}/big.file`, 1); // excellent

// Synchronous, blocking
function syncCopy(src, dest, times) {
  console.log(`reading ${src}...`);
  const data = fs.readFileSync(src);
  for (let i = 0; i < times; i++) {
    const output = `${dest}${i}`;
    start(output);
    fs.writeFileSync(output, data);
    end(output);
  }
}

// Asynchronous, non-blocking
function asyncCopy(src, dest, times) {
  console.log(`reading ${src}...`);
  fs.readFile(src, (err, data) => {
    if (err) {
      return console.error(err);
    }

    for (let i = 0; i < times; i++) {
      const output = `${dest}${i}`;
      start(output);
      fs.writeFile(dest, data, err => {
        if (err) {
          return console.error(err);
        }
        end(output);
      });
    }
  });
}

// Asynchronous, non-blocking, and streaming
function streamCopy(src, dest, times) {
  const rs = fs.createReadStream(src);
  for (let i = 0; i < times; i++) {
    const output = `${dest}${i}`;
    const ws = fs.createWriteStream(output);
    console.log(`streaming ${dest} to ${output}...`);
    rs.on("data", chunk => {
      ws.write(chunk);
    });
    ws.on("finish", () => {
      end(output);
    });
    // or, better
    // rs.pipe(ws).on("finish", () => end(output));
  }
}
