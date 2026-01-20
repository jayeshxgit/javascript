/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/\s/g, ""); // something important.
  const arr = str.split("");
  arr.reverse();
  const rev_str = arr.join("");
  if (str==rev_str){
  return true;
}
else return false;
}

module.exports = isPalindrome;
