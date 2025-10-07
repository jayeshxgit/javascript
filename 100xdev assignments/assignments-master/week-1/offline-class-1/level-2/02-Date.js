// Date is a predefined class built in the js and you can create other objects with it.
// getdate and others are the attributes of the class.

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();
// some good examples with important functions of date class.
function calcsum(n) {
  let a=0;
  for (let i=0; i<n; i++){
    a=a+i;
  }
  return a;
}

let beforedate = new date();
let beforetime= beforedate.getTime();
calcsum();
let afterdate =new date();
let aftertime = afterdate.getTime();

console.log(aftertime-beforetime)

// example 2.
function currenttime(){
  console.log(new Date().getTime());
}
setInterval(currenttime, 1000 );
// setInterval is a built-in JavaScript function that repeats a task at a fixed interval. here it is calling every 1000 ms.