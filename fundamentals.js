//                            JAVASCRIPT NOTES

// variables-: containers for data.
/*
: dynamically typed language(no need to mention what type of value stored in variable. 

: Let-: Here variable cannot be re-declareed but can be updated. A block scope variable.
: const-: Here variable cannot be re-declareed or updated. A block scope variable.
          It only means the binding (the variable reference) cannot change but the content can change.
: var-: can be redeclared or updated.
*/

// let and const are block scoped, meaning they only exist inside the { } where they’re declared.

let a=1; // declared here
a=3;     // value updated here
console.log(a);
var bol=2;e
 
// if const a=1; and now if you change, it will show an error because it stores permanent value.
let fname="jayesh";
let age="19";
console.log(" my name is " + fname + " and my age is " + age);
// other way is write 4 console.log() it will show the same output.
 
// conditional statements.
let ages=19;
if (ages==19) {
    console.log("correct age");
}
else{
    console.log("incorrect age");
}
// loops.
let answer= 0;

for (let i=1; i<=10; i++){
    answer = answer + i;
}
console.log(answer);

// Arrays. (like lists)
// print the even ages.
const Age=[21,22,23,24,25,26]; // used const here because mutation is allowed(only internal data changes not the variable);
// Age.length tells the size of elements in array that is 6
for (let i=0; i<Age.length; i++){
    if (Age[i]%2==0){
        console.log(Age[i])
    }
}

const ln1=["hi","hello","hola"];
const ln2=[1,1,3];

for (let i=0; i<ln1.length; i++){
    if (ln2[i]==1){
        console.log(ln1[i])
    }
}
// objects. (like dictionaries)
const user={
    firstname:"jayesh",
    AGe: [1,2,3]
}
for (let i=0; i<user.AGe.length; i++){
    if (i%2==0){
        console.log(user.AGe[i])
    }

// user.AGe and user["AGe"] are same.
}

let allusers =[{
    fname:"hk",
    lname:"jm"
}, {
    fname:"jk",
    lname:"jm"
},
{ 
    fname:"ak",lname:"am"
}]
for (let i=0; i<allusers.length; i++){
    if (allusers[i]["lname"]=="jm"){
        console.log(allusers[i]["fname"])
    }
     }
    
// functions.

// A function in JavaScript returns undefined if there’s no explicit return statement, or it returns without any value.
function sum(a,b) {
    const value= a+b;
    return value;
}

const sumvalue= sum(2,5) // always have the function inside a variable while calling it. 
console.log(sumvalue);

// callbacks in functions. (pay attention to it)

function sums(a,b, fntocall){
   let result = a+b;
    fntocall(result);
}

function dresult(data){
    console.log("sum's of result :" + data);
}

function dpresult(data){
console.log("sums of result :"+ data)
}

const ans = sums(1,2,dpresult)

// another example. (super important)

function ca(a,b,type){ 
    const ans= type(a,b); // type will now become sum function and perform its task.
    return ans;
}

function sum(a,b){
    return a+b;
}


const values = ca(1,2,sum); // sum is being called inside ca function.
console.log(values);

// another example.
// arguments must be same in all funcitons in order to call them otherwise call them independently.

function displayr(data){
    console.log("result of sum is " + data);

}
function sum (a,b){ 
   let ans = a+b;  
    return ans; // it basically returns the value of the function to the caller.
}
displayr(sum(1,5))
// const val = sum(whatever)
// console.log(val) return value of function is undefined if the funciton doesn't have a return statement.

// good understanding of another code.
function calculate(arithmetic, ...c) {
  const ans = arithmetic(...c);
  return ans;
}

function sum(a, b) {
  return a + b;
}

function mul(a, b, c) {
  return a * b * c;
}

const value1 = calculate(sum, 1, 2);
console.log(value1);  // Output: 3

const value2 = calculate(mul, 10, 2, 3);
console.log(value2);  // Output: 60

// ASYNC AND SYNC Functions.
// sync functions-: Execution of tasks are done one by one.
// Async functions-: Execution of one task isn't dependent on another.

// Async function.
// can imagine the dry run on latentflip.com
// workflow of Async functions call stack -> web apis -> callback queue -> event loop -> call stack.
function summ(n){
let answe= 0;

for (let i=1; i<=n; i++){
    answe = answe + i;
}
return answe;
}
function summs(){
    console.log(summ(10));

}

setTimeout(summs,1000) // this goes to web api while js thread moves to next line.
console.log("hello");

// sync function.
function summ(n){
let a=1;

for (let i=1; i<=1000000; i++){
    a++
}
return a;
}

syncsleep(); // this makes the function perform only one task.

function syncSleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // busy waiting (do nothing)
  }
}

console.log("hello");

// another example to understand file-read function; try to dry run this.f
const fs = require('fs');
function print(err, data){
    if (err){
        console.log("File not found");
    }
    else{
        console.log(data);
    }
}
fs.readFile("a.txt" , "utf-8", print);
console.log("done");

// PROMISES. 
// it's just syntatic sugar still uses callbacks under the hood.
// a cleaner way(promise).
// understand the logic of sending the promise to function so that callback happens once the promise is fulfilled which is when cursor reaches resolve and shares data.
const fs = require('fs');

// read the working theorey for this program.
function jk(){ // storing the promise inside the function so that it can be reused again when function is called. 
    return new Promise(function(resolve){ // promise is a class, can initialize outside or inside the function.
        fs.read("a.txt", "utf-8", function(err,data)) { // async task is being performed.
            resolve(data); // whenever this is called then the function inside .then() is called.
        }
        });
}
 
 // promise pending means resolve hasn't been called yet.

function ontime(data){
    console.log(data)
}

jk().then(ontime); // .then(ontime) means: “When the Promise resolves, pass its result into ontime.”
                    // So once the file is read, its content gets passed to ontime(data), which logs it.

// .then gets called whenever the async function resolves.
// another example.
let p =new promise(function(resolve){
    resolve("hi there");
});
p.then(function(data){  // whenever a promise is returned then we can call .then command on it.
    console.log(data);
})

// ASYNC AWAIT.(even more cleaned version of normal promise syntax)

function jkk(){
    let p = new promise(function(resolve){
        resolve("hi there"); //resolve(...) tells JavaScript: “This async operation is done, and here’s the result.
        
    });
    return p; // returning the promise is necessary.
}
async function main(){
    const value = await jkk();
    console.log(value);
}
setInterval(main,1000);


// Wrapping another async fn inside another fn. (just to show this exist)
// call back hell vibe. (this can be fixed with promises)
function myownsetTimout(fn, duration){
    setTimeout(fn, timeout); // this will only go to webapi not myownsetTimout.
}
myownsetTimout(function(){
    console.log("hi there"), 1000
})

// promises(this is a better approach)
function calls(duration){
    let p = new Promise(function(resolve){
        const data = "print this shit";
        setTimeout(function(){
            resolve(data);
        }, duration);
    });
    return p;
}
async function calling(){ // ASYNC function always returns a promise.
    const values= await calls(2000); // this is basically returning a promise.
    console.log(values); 
}
calling();
// rejects and err concept in promises.
function kj(){
    return new promise(function(resolve,reject){
        fs.readFile("anonymous.txt", "utf-8", function(err,data){
            //err
            if(err){
                reject("file not found");
            }
            else{
                resolve(data)
            }
        })
    })
}

kj().then(function(x){
    console.log(x);
}).catch(function(e){
    console.log(e);
})

// using async await method
async function main() {
  try {
    const data = await kj(); // waits till Promise resolves
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

main();


