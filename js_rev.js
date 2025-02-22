// / Q 1. Write a function named multiplyNumbers that takes two arguments and returns their product. Test it by multiplying 5 and 10.
// function multipluyNumber(numA, numB) {
//   result = numA * numB;
//   console.log(result);
// }
// multipluyNumber(5, 5);

//  Q2. Objects and Methods

// Create a book object with properties title, author, and year. Add a method getBookInfo() that returns a string in the format: "Title by Author, published in Year".

// let book = {
//   tittle: " testing",
//   year: 2025,
//   author: "Ankush Arya",
//   getBooKInfo: function () {
//     return this.tittle + " by " + this.author + " published in " + this.year;
//   },
// }

// console.log(book.getBooKInfo())

// 3. Array Manipulation

// Given an array of numbers let nums = [3, 7, 10, 25, 12, 5], write a function that uses .filter() to return an array of numbers greater than 10.

// let numbers = [3, 7, 10, 25, 12, 5];

// function filterGreaterThanTen(arr) {
//   return arr.filter(numbers => numbers > 10);
// }

// console.log(filterGreaterThanTen(numbers));

// 4. Arrow Functions

// Write an arrow function isEven() that checks if a number is even. If it is, return true; otherwise, return false.

// const isEven = (num) => {
//   return num % 2 === 0 ? true : false;
// }

// console.log(isEven(7));


// 5. Destructuring

// You are given the following object:

// const user = { name: "Alice", age: 25, country: "USA" };

// Use destructuring to extract name and age from the object and print them in a string like: "Alice is 25 years old".

// const user = { name: "Alice", age: 25, country: "USA" };
// console.log(`${user.name} is ${user.age} years old`);

// 6. Looping and Conditionals
// Write a function findLargestNumber that takes an array of numbers and returns the largest number from the array.
// Use a for loop to iterate through the array.

// const numberse = [3, 7, 10, 25, 12, 5];

// function findLargestNumber (arr){
//   let largest = arr[0];
//   for(let i= 0 ; i <arr.length; i++){
//        if ( arr[i] >largest){
//            largest = arr [i];  
//        }
//   }
//   return largest;
// }
// console.log(findLargestNumber(numberse));

// 7. Higher - Order Functions

// Given the following array:

// const words = ["apple", "banana", "grape", "orange", "kiwi"];

// Use.map() to create a new array where each word is capitalized.

// const words = ["apple", "banana", "grape", "orange", "kiwi"];
//  let uppercase = words.map( word => word.toUpperCase());
// console.log(uppercase);

// 8. Closures

// Write a function outer() that contains a variable message.Inside outer(), create another function inner() 
// that logs the value of message.Make sure the inner() function has access to message via closure.

// function outer( ){
// let message = " this is inner function";

//   function inner (){
//      console.log(message);
//   }
//   return inner;
// }

// const innerFunction = outer();
// innerFunction();

// 9. Set and Map

// Create a Set of unique numbers, then use a Map to store a relationship between numbers and their respective square values(e.g., { 2: 4, 3: 9 }).


// 10. Async / Await

// Write a simple asynchronous function using async and await that fetches data from a URL(you can use a placeholder API like https://jsonplaceholder.typicode.com/users) and logs the result to the console.
//   Bonus Challenge: Recursion

// Write a recursive function factorial(n) that returns the factorial of a number n.For example, factorial(5) should return 120.





// let result = false && true || true && false || !false;
// console.log(result);


// How can you use logical operators to check if a number is between 10 and 50 (inclusive)?

// let ankush = 1;

// if (ankush >= 10 && ankush <=10  || ankush <= 50 && ankush >= 50){
//   console.log( `num is under 10 to 50 = ${ankush}`);
// }else{
//   console.log(" number is not under 10 to 50 ");
// }


// Write a JavaScript function to calculate the sum of two numbers.  

// const a = 2 ;
// const b = 5;

// function sumOfNum(a, b ){
//   return result = a + b;
// }
// console.log(sumOfNum(10,6));
// Evaluate the following:

// let x = "Hello" && "World";
// let y = 0 || (false && true) || "JavaScript";
// console.log(x, y);

// console.log(0 && 1 || 2 && 3);

// …or create a new repository on the command line
// echo "# js_Rev.js" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Ankush6239/js_Rev.js.git
// git push -u origin main



// …or push an existing repository from the command line
// git remote add origin https://github.com/Ankush6239/js_Rev.js.git
// git branch -M main
// git push -u origin main


// Write a JavaScript program to find the maximum number in an array. 

// let arr = [25, 15, 30, 50, 20];

// let max = arr[0]; 
// for (let i = 1; i < arr.length; i++) { 
//   if (arr[i] > max) { 
//     max = arr[i]; 
//   }
// }

// console.log("Maximum number:", max);


// Write a JavaScript program to reverse a given string. 
// "Hiring managers are expecting an accurate solution that demonstrates the interviewee’s proficiency in JavaScript programming.  ";


// function str(stringRev){
//      return stringRev.split('').reverse().join('');
//     }

//     console.log(str("Hiring managers are expecting an accurate solution that demonstrates the interviewee’s proficiency in JavaScript programming."));



    // Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// let num = [2,5,8,10,16,17,19, 22, 25];
//     function  evenNum (num) {
//       return num.filter(num=> num %2 !== 0);
//     }

// console.log(evenNum(num) );


//  Write a JavaScript program to calculate the factorial of a given number.
// const num = [1,2,3,4,5,6,7,8,9,10];

// function factorial(num){
//   if (num === 0 || num === 1 ){
//     return 1;
//   }else{
//     return num *factorial(num-1);
//   }
// }
// console.log(factorial(num));

// Write a JavaScript function to check if a given number is prime. 

// let num = [22, 3, 4, 5,6,7,8,9,10,11,12,14,13,];

// function primeNum(num){
//   if (num < 2)  return false; 
//     for(let i = 2; i <= Math.sqrt(num); i++){
//      if(num % i === 0) return false; 
//     }
  
//   return true;
// }
// let primeNumbers = num.filter(primeNum);

// console.log(primeNumbers);

