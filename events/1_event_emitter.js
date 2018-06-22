const EventEmitter = require("events").EventEmitter;
const human = new EventEmitter();

human.on("sleep", function(message) {
  console.log(`${message} zzzzzzz... `);
});

human.on("need", function(message) {
  console.log(`!! I need ${message}`);
});

human.emit("sleep", "I feel sleepy...");
human.emit("need", "a cocktail.");
human.emit("need", "a tomato.");
