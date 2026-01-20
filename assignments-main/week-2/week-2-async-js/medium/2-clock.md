Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function gettime() {
    const clock = new Date();

    const hh = String(clock.getHours()).padStart(2, '0');
    const mm = String(clock.getMinutes()).padStart(2, '0');
    const ss = String(clock.getSeconds()).padStart(2, '0');

    console.clear();
    console.log(hh + ":" + mm + ":" + ss);

    setTimeout(gettime, 1000);
}

gettime();


can be done using setinterval method.

let counter = 0;

const updateClock = () => {
    const now = new Date();

    // 24-hour format
    const hours24 = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // 12-hour format
    const hours12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0'); IMPORTANT LOGIC
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    
    console.log(`24-hour format: ${hours24}:${minutes}:${seconds}`);
    console.log(`12-hour format: ${hours12}:${minutes}:${seconds} ${ampm}`);

    setTimeout(updateClock, 1000);
};

updateClock();

