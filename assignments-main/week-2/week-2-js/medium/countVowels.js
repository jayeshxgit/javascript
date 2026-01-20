/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str=str.toLowerCase();
  const arr = str.split("");
 const array_ =["a","e","i","o","u"];

 let count = 0;
 for(let i=0; i<arr.length;i++){
  for(let j=0; j<array_.length; j++){
    if(arr[i]==array_[j]) count ++;
  }
 }
 return count;

}

/* opti
 const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
        if (vowels.includes(char)) {    check if character is vowel or not
            count++;
        }
    }
  
    return count;
*/

module.exports = countVowels;