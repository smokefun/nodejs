const { Readable } = require("stream");

const rs = Readable();

rs.push("beep"); // we push the data that we want the consumer to consume
rs.push("boop");
rs.push("\n");
rs.push(null); // no more data

rs.pipe(process.stdout); // to consume the stream, we pipe it to a writable stream
