console.log("1");

setTimeout(() => console.log("2"), 0);

process.nextTick(() => console.log("3"));
// nextTick() adds the callback to the "next tick queue"
// Once the current turn of the event loop turn runs to completion, all callbacks currently in the next tick queue will be called

console.log("4");
