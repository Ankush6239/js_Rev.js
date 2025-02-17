// / Q 1. Write a function named multiplyNumbers that takes two arguments and returns their product. Test it by multiplying 5 and 10.
function multipluyNumber(numA, numB) {
  result = numA * numB;
  console.log(result);
}
multipluyNumber(5, 5);

//  Q2. Objects and Methods

// Create a book object with properties title, author, and year. Add a method getBookInfo() that returns a string in the format: "Title by Author, published in Year".

let book = {
  tittle: " testing",
  year: 2025,
  author: "Ankush Arya",
  getBooKInfo: function () {
    return this.tittle + " by " + this.author + " published in " + this.year;
  },
}

console.log(book.getBooKInfo())

// 3. Array Manipulation

// Given an array of numbers let nums = [3, 7, 10, 25, 12, 5], write a function that uses .filter() to return an array of numbers greater than 10.

let numbers = [3, 7, 10, 25, 12, 5];

function filterGreaterThanTen(arr) {
  return arr.filter(numbers => numbers > 10);
}

console.log(filterGreaterThanTen(numbers));

// 4. Arrow Functions

// Write an arrow function isEven() that checks if a number is even. If it is, return true; otherwise, return false.

const isEven = (num) => {
  return num % 2 === 0 ? true : false;
}

console.log(isEven(7));


// 5. Destructuring

// You are given the following object:

// const user = { name: "Alice", age: 25, country: "USA" };

// Use destructuring to extract name and age from the object and print them in a string like: "Alice is 25 years old".

const user = { name: "Alice", age: 25, country: "USA" };
console.log(`${user.name} is ${user.age} years old`);

// 6. Looping and Conditionals
// Write a function findLargestNumber that takes an array of numbers and returns the largest number from the array.
// Use a for loop to iterate through the array.

const numberse = [3, 7, 10, 25, 12, 5];

function findLargestNumber (arr){
  let largest = arr[0];
  for(let i= 0 ; i <arr.length; i++){
       if ( arr[i] >largest){
           largest = arr [i];  
       }
  }
  return largest;
}
console.log(findLargestNumber(numberse));

// 7. Higher - Order Functions

// Given the following array:

// const words = ["apple", "banana", "grape", "orange", "kiwi"];

// Use.map() to create a new array where each word is capitalized.


// 8. Closures

// Write a function outer() that contains a variable message.Inside outer(), create another function inner() 
// that logs the value of message.Make sure the inner() function has access to message via closure.


// 9. Set and Map

// Create a Set of unique numbers, then use a Map to store a relationship between numbers and their respective square values(e.g., { 2: 4, 3: 9 }).


// 10. Async / Await

// Write a simple asynchronous function using async and await that fetches data from a URL(you can use a placeholder API like https://jsonplaceholder.typicode.com/users) and logs the result to the console.
//   Bonus Challenge: Recursion

// Write a recursive function factorial(n) that returns the factorial of a number n.For example, factorial(5) should return 120.













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