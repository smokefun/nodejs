const { EventEmitter } = require("events");
const human = new EventEmitter();

human.on("need", message => {
  console.log(`I need ${message}`);
});

human.emit("need", "a cocktail.");
human.emit("need", "a tomato.");
