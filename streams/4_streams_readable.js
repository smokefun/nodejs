const { Readable } = require("stream");

let letter = 65;
const rs = Readable({
  // with read, we're not pushing all the data in the stream
  // we push data on demand, when a consumer asks for it
  // while the consumer consumes the data, the read method will continue to fire and push more letters
  read: function() {
    this.push(String.fromCharCode(letter++));
    if (letter > 90) {
      this.push("\n");
      this.push(null);
    }
  }
});

rs.pipe(process.stdout);
