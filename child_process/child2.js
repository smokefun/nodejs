process.stdin.resume();
// step 2: listen stdin stream
process.stdin.on("data", data => {
  console.log("parent: " + data);
  console.log("child2: Hello parent");
  process.exit();
});
