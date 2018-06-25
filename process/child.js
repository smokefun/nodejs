console.log("process.channel:");
console.dir(process.channel, { depth: null });
console.log(`is child connected ? : ${process.connected}`);
process.send("Hello from child's process.send()");
process.disconnect();
console.log(`is child connected ? : ${process.connected}`);
