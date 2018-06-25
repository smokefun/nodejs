const path = require("path");

console.log("path.basename(): " + path.basename(__filename));
console.log("path.dirname(): " + path.dirname(__filename));
console.log("path.extname(): " + path.extname(__filename));

console.log(path.resolve("1_paths.js", "paths"));
// processes from right to left
// reorders path segments
