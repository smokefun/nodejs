const fs = require("fs");
const path = require("path");

if (!process.version.startsWith("v10")) {
  console.error("async iteration requires at least node v10");
  process.exit(1);
}

async function main(inputFilePath) {
  const readStream = fs.createReadStream(inputFilePath, {
    encoding: "utf8",
    highWaterMark: 1024
  });

  for await (const chunk of readStream) {
    console.log(">>> " + chunk);
  }
  console.log("### DONE ###");
}

const tinyFile = path.join(__dirname, "..", "src", "tiny.file");
if (!fs.existsSync(tinyFile)) {
  console.error("Missing files! Did you run npm start ?");
  process.exit(1);
}
main(tinyFile);
