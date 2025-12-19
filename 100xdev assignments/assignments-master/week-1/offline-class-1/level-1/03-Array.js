// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// good question.
const intarray = [1, 2, 3];
const secndarray = [4, 5, 6];

const farray = intarray.concat(secndarray);

console.log(farray);  // Output: [1, 2, 3, 4, 5, 6]


// pop()
function popExample(arr) {

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

/* SLICE method. no mutation
let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50]

SPLICE method. mutates
let arr = [10, 20, 30, 40, 50];

let removed = arr.splice(1, 2);

console.log(removed); // [20, 30]
console.log(arr);     // [10, 40, 50]
*/

// shift() (it removes element at 0th index in an array )
function shiftExample(arr) {

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift() (vice versa of shift())
function unshiftExample(arr, element) {

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach() (it is just like callback function here it will take another function as an argument.)
function forEachExample(arr) {

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);
// her's how it should look.(it will print iterations of the loop.)
// here fn is the iterations in the loop which is 1,2,3.
const iniarray=[1,2,3]
function flog(fn){
  console.log(fn)
}
iniarray.forEach(flog)

// map()-: does modification to an array and creates a new one. arr.map(x => x * 2);
function mapExample(arr) {

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()-: filters and select new items. arr.filter(n=> n>3);
function filterExample(arr) {

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find() first matching element. arr.find(x=> x==4);
function findExample(arr) {

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort() -: arr.sort((a,b)=> a-b); mutates the array
function sortExample(arr) {

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
// arr.reverse(); 
