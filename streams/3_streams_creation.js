const Readable = require("stream").Readable;
const Writable = require("stream").Writable;

const rs = Readable();

let c = 97;
rs._read = function() {
  rs.push(String.fromCharCode(c++));
  if (c > "z".charCodeAt(0)) rs.push(null);
};

const ws = Writable();

ws._write = function(chunk, enc, next) {
  console.log("" + chunk);
  next();
};

rs.pipe(ws);
