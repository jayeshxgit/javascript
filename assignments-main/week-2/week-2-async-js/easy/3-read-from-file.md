## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

// SIMPLE OPERATION.
const fs = require('fs');

function print(err, data) {
  if (err) {
    console.log("Error Occurred");
    return; // so that function reading stops here.
  } else {
    let content = data;
    content = content.split("").sort().join(" "); // Strings are immutable so returns a new string.
    console.log(content);
  }
}

fs.readFile('a.txt', 'utf-8', print); // print goes as a callback function.

// heavy opearation.

const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log("error occured");
        return;
    }
    else{
        console.log(data);
    }
});
let count = 0;
for(let i=0; i<1e5; i++){
    count++;
}
console.log(count);

readFile runs in the background (libuv thread pool)
Callback waits in the event queue
Heavy synchronous code blocks the event loop
Callback executes only after stack is free