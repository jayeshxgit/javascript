## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second.

let count = 0;

const timer = setInterval(() => {
  count++;
  console.log(count);

  if (count === 10) {     stops at 10 secs
    clearInterval(timer);
  }
}, 1000);


setInterval() returns an interval ID
That ID is a number (or object internally)
JS uses this ID to identify which interval to stop
To stop an interval, you MUST pass its ID to clearInterval:

