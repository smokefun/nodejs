const os = require("os");

console.log(`os.platform(): ${os.platform()}`);
console.log(`os.release(): ${os.release()}`);
console.table(os.cpus(), ["model"]);
