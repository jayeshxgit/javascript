 // String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getstringlenth(str){
  console.log("length:", str.length);
}
getstringlenth("jayesh")

// const str= "jayesh";
// console.log(str.length) method to use string functions

// indexOf
function findIndexOf(str, target) {
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

//const str= "jayesh";
//console.log(str.indexOf("sh")) this is the way every string function works

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring same as slice.
function getSubstring(str, start, end) {
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split (it splits the string into an array mentioned inside the split function)
function splitString(str, separator) {
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim-: removes white spaces from a string from beginning and end.
function trimString(str) {
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
// some good questions.
// using for loop to add substring in a empty string.
// it is the internal working of slice function.
function cutit(str,sindex, lindex){
  let newstr="";
  for (let i=0; i<str.length; i++){
    if (i>=sindex && i<lindex){
   }
  }
  return cutit;
}
console.log(cutit("jayesh",1,4))