const { Duplex } = require("stream");

let letter = 65;

const ds = Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {
    this.push(String.fromCharCode(letter++));
    if (letter > 90) {
      this.push("\n");
      this.push(null);
    }
  }
});
// the readable and writable sides of a duplex stream operate completely independently from one another
// to compute an output from an input, use a Transform Stream

process.stdin.pipe(ds).pipe(process.stdout); // try it with: ls | node streams/5_streams_duplex.js
