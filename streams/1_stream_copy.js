const fs = require("fs");
const path = require("path");

const temp = path.join(__dirname, "../temp");
const dest = path.join(__dirname, "../dest");

const kali = temp + "/kali.iso";
const alice = temp + "/alice.txt";
const ubuntu = temp + "/ubuntu.iso";

const start = filename => console.log("started copy of " + filename);
const end = filename => {
  console.log("end of copy of " + filename);
  setTimeout(() => {
    console.log("started deletion of " + filename);
    fs.unlink(filename, err => {
      if (err) {
        console.error(err);
      }
    });
  }, 10000);
};

for (let i = 0; i < 3; i++) {
  // syncCopy(alice, `${dest}/alice${i}.txt`);
  // syncCopy(ubuntu, `${dest}/ubuntu${i}.iso`); // blocking
  // asyncCopy(ubuntu, `${dest}/ubuntu${i}.iso`); // good, not blocking, but consumes a lot of memory
  // copy(kali, `${dest}/kali${i}.iso`); // error due to size exceeding memory
  // streamCopy(kali, `${dest}/kali${i}.iso`); // excellent
}

function syncCopy(src, dest) {
  start(dest);
  const data = fs.readFileSync(src);
  fs.writeFileSync(dest, data);
  end(dest);
}

// async copy
function asyncCopy(src, dest) {
  start(dest);
  fs.readFile(src, (err, data) => {
    console.log("done reading");
    if (err) {
      return console.error(err);
    }
    fs.writeFile(dest, data, err => {
      console.log("done writing");
      if (err) {
        return console.error(err);
      }
      end(dest);
    });
  });
}

function streamCopy(src, dest) {
  start(dest);
  const rs = fs.createReadStream(src);
  const ws = fs.createWriteStream(dest);

  rs.on("data", chunk => {
    ws.write(chunk);
  });

  rs.on("end", () => {
    end(dest);
  });
}
