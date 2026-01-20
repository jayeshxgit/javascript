## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


Same task as readfile one.

fs.writeFile is asynchronous, but its callback execution depends on the event loop being unblocked.
const fs = require("fs");

console.log("Start"); // sync task

fs.writeFile("b.txt", "Hello from async write!", (err) => { // You write the data of the file in the center.
  console.log("Write completed");
});

// Blocking task
let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}

console.log("End"); sync task
