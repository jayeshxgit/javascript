/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
return new Promise((resolve) =>{
    const data = new Date();

/*
This loop continuously checks the elapsed time and keeps the JS thread busy until
the required milliseconds have passed, effectively blocking the event loop.
*/
    while(new Date()-data < milliseconds){ // this blocks the thread(a bad practice) here unlike async task which lets the thread go further.
 }
    resolve();
});

}

module.exports = sleep;
