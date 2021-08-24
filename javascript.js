// ************ Var vs Let vs Const ************
// var declarations are globally scoped or function scoped 
// while let and const are block scoped. 
// var variables can be updated and re-declared within its scope; 
// let variables can be updated but not re-declared; 
// const variables can neither be updated nor re-declared. 
// They are all hoisted to the top of their scope

// ************ Functions ************
// function sayHello() {
//     console.log("Hey there Akshay")
// }

// sayHello()

// when you want to call a function use ()
// when we want to refer the function we use without ()

// function sayHello(name){
//     console.log(`Hey ${name} ..! How are you?`)
// }

// sayHello("Akshay")

// function greet(){
//     return "Hello"
// }

//greet() // nothing is happening coz there is difference between console.log and returning a statement.
// console.log(greet()) 
// // OR
// var greetings = greet()
// console.log(greetings)

// Self Invloking Functions

// (function () {
//     console.log("I am self calling functions")
// }) ()

// Arrow Functions 
// const hello = () => {
//     return "Hello World!";
// }

// console.log(hello())

// ************ Switch Case ************
// var getUserRole = function(name, role){
//     switch (role){

//         case "admin":
//             return `${name} is admin with all access`
//             break;
//         case "subadmin":
//             return `${name} is admin with all access`
//             break;
//         case "user":
//             return `${name} is admin with all access`
//             break;
//         default:
//             return `${name} is a trial user`
//     }
// }
// console.log(getUserRole("Akshay", "user"))

// ************ Variable and Function Hoisting ************

// Function declarations are scanned and made available
// Variable declarations are scanned and made undefined
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Hoisting applies to variable declarations and to function declarations.
// Because of this, JavaScript functions can be called before they are declared:

// ************ Closure in Javascript ************
// function init() {
//     var fname = "Akshay"
//     function sayFname(){
//         console.log(fname)
//     }
//     return sayFname
// } 
// var val = init()
// // here init holds reference of sayFname so its kind of blocked. And if we call init it will
// //simply points to referenced function, So in order to call we need to store init into variable and just run that variable.
// val()

// // Another example

// function doAddition(x){
//     return function(y) {
//         return x + y
//     }
// }

// const addition = doAddition(5)
// console.log(addition(5))
// // another way
// console.log(doAddition(10) (10))

// ************ Array Methods ************

//var countries = ["India", "UAE", "America", "Russia"]

// var states = new Array("Maharashtra", "Rajasthan", "Delhi", "Keral")

// printing arrays
// console.log(states)
// console.log(states[1])
// console.log(countries[2])

// var user = ["Akshay", "akshaykashid40@gmail.com", 5, 25, "3 Courses", true]

// console.log(user)

//The JavaScript method toString() converts an array to a string of (comma separated) array values.
//console.log(user.toString())

//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator:
// user.join("*") 
// console.log(user)

// user.pop() // to delete element from last
// console.log(user)
// user.pop()
// console.log(user)
//delete user[1]

// user.push("Unmarried")
// console.log(user)

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
// user.shift()
// console.log(user)

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// user.unshift("Backend")
// console.log(user)

// The splice() method can be used to add new items to an array
// he first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits)

//Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
// The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);   // Removes the first element
// console.log(fruits)

// concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys); // Concatenate (join) myGirls and myBoys
// console.log(myChildren)  

// The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Orange"):
//The slice() method creates a new array. It does not remove any elements from the source array.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(fruits)
// console.log(citrus)

// forEach
// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// The map() method is used for creating a new array from an existing one, 
//applying a function to each one of the elements of the first array.
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); // [2, 4, 6, 8]

//The filter() method takes each element in an array and it applies a conditional statement against it. 
//If this conditional returns true, the element gets pushed to the output array. 
//If the condition returns false, the element does not get pushed to the output array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens); // [2, 4]

//The reduce() method reduces an array of values down to just one value. 
//To get the output value, it runs a reducer function on each element of the array.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// console.log(sum); // 10

// ************ String Methods ************

//All string methods return a new string. They don't modify the original string.
//Formally said: Strings are immutable: Strings cannot be changed, only replaced.

// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(txt.length);

// The slice() Method
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
// This example slices out a portion of a string from position 7 to position 12 (13-1):
// let str = "Apple, Banana, Kiwi";
// str.slice(7, 13)     // Returns Banana

//If a parameter is negative, the position is counted from the end of the string.
//This example slices out a portion of a string from position -12 to position -6:
// let str = "Apple, Banana, Kiwi";
// str.slice(-12, -6)    // Returns Banana

//If you omit the second parameter, the method will slice out the rest of the string:
//str.slice(7);    // Returns Banana,Kiwi
//or, counting from the end:
//str.slice(-12)    // Returns Banana,Kiwi

// The substring() Method
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

// let str = "Apple, Banana, Kiwi";
// substring(7, 13)    // Returns Banana

//If you omit the second parameter, substring() will slice out the rest of the string.
// let str = "Apple, Banana, Kiwi";
// str.substr(7)    // Returns Banana,Kiwi

//If the first parameter is negative, the position counts from the end of the string.
// let str = "Apple, Banana, Kiwi";
// str.substr(-4)    // Returns Kiwi

//The replace() method replaces a specified value with another value in a string:
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "Akshay");
// console.log(newText)
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work

// let text1 = "Hello World!";      
// let text2 = text1.toUpperCase();  
// let text3 = text1.toLowerCase()
// console.log(text1, text2, text3)

//concat() method
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);

// trim() method removes whitespace from both sides of a string:
// let text = "       Hello World!        ";
// text.trim()    // Returns "Hello World!"

// padding methods
// let text = "5";
// var text1 = text.padStart(4,0)    // Returns 0005
// var text2 = text.padEnd(4,0)     // Returns 5000
// console.log(text1, text2)

//The charAt() method returns the character at a specified index (position) in a string:
// let text = "HELLO WORLD";
// text.charAt(0)           // Returns H
//The charCodeAt() method returns the unicode of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "HELLO WORLD";
// text.charCodeAt(0)       // Returns 72

//A string can be converted to an array with the split() method:
// const text = "Akshay Mohan Kashid"
// var t = text.split(",")          // Split on commas
// var t1 = text.split(" ")          // Split on spaces
// var t2 = text.split("|")          // Split on pipe

// console.log("Value of t ", t, "Value of t1 ", t1, "Value of t2 ", t2)

// ************ For, While, Do While Loop ************

//var states = ["Maharashtra", "Delhi", "Keral", "Gujrat", 1994, "Goa"]

// for (let i =0; i < states.length; i++) {
//     console.log(states[i])
// }

// for (let i =0; i < states.length; i++) {
//     if (typeof states[i] !== 'string') continue
//     console.log(states[i])
// }
//here it will continue the execution

// for (let i =0; i < states.length; i++) {
//     if (typeof states[i] !== 'string') break;
//     console.log(states[i])
// }
//here it breaks the loop and stop as it gets the other than string as data type

//let i = 0
// while( i < states.length){
//     console.log(states[i])
//     i++
// }

// do{
//     console.log(i) 
//     i++
// }while(i<10)

// let j = 20

// do{
//     console.log(j) 
//     j++
// }while(j<10)

//for of loop used for arrays
// for(const n of states){
//     console.log(n)
// }

// for in loop
// const symbols  = {
//     yt: "Youtube",
//     inst: "Instagram",
//     gm: "Gmail",
//     cc: "Candy Crush"
// }
// for(let i in symbols) {
//     console.log(`Keys in objects are ${i} and values in objects are ${symbols[i]}`)
//     console.log("Keys",i)
//     console.log("Values",symbols[i])
// }

// ************ Promise Async Await ************
// const uno = () => {
//     console.log("I am one")
// }

// const dos = () => {
//     setTimeout(() => {
//         console.log("woooooohoooo")
//     }, 3000);
//     console.log("I am Two")
// }

// const tres = () => {
//     console.log("I am Three")
// }

// uno()
// dos()
// tres()

// Here woohoo is printing after 3 sec. but i am three is executing before that

// const uno = () => {
//     return "I am One"
// }

// const dos = () => {
//     setTimeout(() => {
//         return "I am Two"
//     }, 3000);
// }

// const dos = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve ("I am Two")
//         }, 3000);
//     })
// }

// const tres = () => {
//     return "I am Three"
// }

// const callMe = async () => {
//     let valOne = uno();
//     console.log(valOne)

//     let valTwo = await dos();
//     console.log(valTwo)

//     let valThree = tres();
//     console.log(valThree)
// }

// callMe()


// ************ Programs ************

// ************ Length of array without length functions ************

// var a = [10,20,30,40,50, 60]

// function arrayLength (s) {
//     var len = 0

//     while(s[len] !== undefined) {
//         len ++
//     }
//     return len
// }
// console.log(arrayLength(a)); 

// ************ Reverse string with built in functions ************

// function Reverse(str) {
//     var strArray = str.split("")
//     var reverseStrArray = strArray.reverse()
//     var reverseStr = reverseStrArray.join("")
//     return reverseStr
// }
// ************ Reverse string without built in functions ************

// function Reverse(str) {
//       var final = ""
//     for(var i = str.length-1; i >= 0; i--){
//         final = final + str[i]
//     }
//     return final
// }

// console.log(Reverse("Akshay")); 

// ************ Factorial of a Number ************

// function Factorial(num){
//     var result = 1
//     for(let i = 1; i<= num; i++){
//         result = result * i
//     }
//     console.log(result)
// }

// Factorial(4)

// ************ Palindrome of string with built in functions ************

// const palindrom = (str) => {
//     var strArray = str.split("")
//     var reverseStrArray = strArray.reverse()
//     var reverseStr = reverseStrArray.join("")

//     if(reverseStr === str){
//         console.log("Its a Palindrom")
//     } else {
//         console.log("Its not palindrom")
//     }
// }

// ************ Palindrome of string without built in functions ************

// function palindrom (str) {
//     var final = ""
//     for(var i = str.length-1; i >= 0; i--){
//         final = final + str[i]
//     }
//     if(final === str){
//         console.log("Its a Palindrome")
//     } else {
//         console.log('Its not a palindrome')
//     }
// }

// palindrom("Akshay")

// ************ If we pass 15 as string it should return 1 + 5 = 6 as answer. ************

// function addition(str) {
//     var num = str.split("")

//     for (var i=0; i<num.length; i++) {
//         num[i] = parseInt(num[i], 10);
//     }

//     var sum = num.reduce((a,b) => {
//         return a + b
//     })
//     console.log(sum)
// }

// addition("12255")

// ************ ...args in Javascript ************

// function sumTwo(...args) {
//     var sum = 0
//     for(const arg of args){
//         sum = sum +  arg
//     }
//     return sum
// }

// var newSum = sumTwo(1,2,5,5)
// console.log("Sum is",newSum)

// ************ Longest string in word ************

// const longestWord = (str) => {
//     var words = str.split(" ")
//     console.log(words)
//     var longest = ""

//     for(var word of words) {
//         if(word.length > longest.length) {
//             longest = word
//         }
//     }
//     console.log(longest)
// }

// longestWord("Hello My Name is AkshayKumar Kashid")

// ************ Capitalize the first letter of each word of a given string ************

// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));