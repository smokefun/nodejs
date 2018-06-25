const { Readable, Transform } = require("stream");

const ts = Transform({
  transform(chunk, encoding, cb) {
    this.push(chunk.toString().toUpperCase());
    cb();
  },
  flush(cb) {
    this.push("\n");
    cb();
  }
});

const rs = Readable();
["a", "b", "c", "d", "e", null].forEach(l => rs.push(l));

rs.pipe(ts).pipe(process.stdout);
