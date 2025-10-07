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

// map()
function mapExample(arr) {

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
