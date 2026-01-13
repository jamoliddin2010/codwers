// savol=///
//  assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);


// javob=////
// function maps(arr) {
//   newArr = arr.map(x => x * 2);
// }
// console.log(newArr);


// javob

// function sum(numbers) {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }

// //   return total;
// }




// savol//

// ['hello', 'world', 'this', 'is', 'great'] => 'hello world this is great'



// javob

// function smash(words) {
//   let sentence = "";

//   for (let i = 0; i < words.length; i++) {
//     sentence += words[i];
//     if (i !== words.length - 1) {
//       sentence += " ";
//     }
//   }

//   return sentence;
// }

// savol////////////////////////////////////////////////
// Fix the function I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number. Can you help me fix the function?





// javob///
// function addFive(num) {
//   return num + 5;
// }




// savol

// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive



// javob
// let sorter = (textbooks) => textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)

// savol  
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// javob

// let stringToArray = (string) => string.split(" ")



// savol 
// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.

// javob



// function squareSum(numbers){
//   let sum = 0
//   numbers.forEach((value) => sum += value**2)
//   return sum
// }




// savol
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



// javob//////

// function grow(arr) {
//   let result = 1;
//   arr.map(num => result *= num);
//   return result;
// }






// function typeOfSum(a, b) {
//  return typeof (a+b)
// }



// function opposite(number) {
//   return -number
// }

// savol a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

// [1] --> 0
// []  --> 0



// function consecutive(arr) {
//  let min =Math.min(...arr)
//  let max =Math.max(...arr)
//  let newarr = []
//   for(let i= min; i <= max; i++) newarr.push(i)
//   re

// savol
// Order People by age Using Arrow Function
// Sort and Order people by their age using Arrow Functions
// Task
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
// Input
// Input will be a valid array with People objects containing an Age and Name
// Output
// Output will be a valid sorted array with People objects sorted by Age in ascending order







// var OrderPeople = function(people){
//   return people.sort((a,b)=>a.age -b.age ); 
// }
//  savol Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]) --> true

// isSquare([3, 4, 7, 9]) --> false

// isSquare([]) --> undefined
// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None



// let isSquare= (arr) => arr.length ? arr.map((n) => !`${Math.sqrt(n)}`.includes(".")).every((v)=>v):undefined;


// 2

// let transactions = [
//   { type: "income", amount: 500 },
//   { type: "expense", amount: 200 },
//   { type: "income", amount: 1500 },
//   { type: "expense", amount: 300 },
//   { type: "income", amount: 700 }
// ];


// // let newansactions = transactions.filter(obj => {
//     }
// // console.log(newansactions)

// let newtransactions = transactions.findIndex(obj=>obj.type === "expense");
// console.log(newtransactions)

// let newtransactions= newtransactions.map(obj => obj.type).lastIndexOf("income");
// console.log(newtransactions);







// 1 
// let students = [
//   { name: "Ali", score: 70, active: true },
//   { name: "Vali", score: 85, active: false },
//   { name: "Hasan", score: 90, active: true },
//   { name: "Husan", score: 60, active: true }
// ];



// students = students.filter((obj)=>{
//     if(obj.active){
//         obj.score = obj.score *0.1 + obj.score;
//     }
// });
// let sum = students.resdyce((acc,curr)=> acc+ curr.score,0)/students.length;
// console.log(students);
// console.log(+sum.toFixed(2));




// Mahsulotlarni:

// narx bo‘yicha kamayish tartibida saralang

// natijada faqat name va price qaytsin

// 3==///////////////////////////////////////////////

// let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 600 }
// ];


// products = products.sort((a, b) => a.price - b.price)
// console.log(products);
// 4///////////////////////////////////////////////////////==
 // let employees = [
//   { name: "Ali", verified: true, role: "user" },
//   { name: "Vali", verified: true, role: "manager" },
//   { name: "Hasan", verified: true, role: "user" }
// ];


// let employees = employees.filter((obj)=>obj.role === "manager")

// console.log(newemployees);

// 5=========================////////////

// let sales = [
//   [120, 300],[450, 100],[600, 200]
// ];

// sales = sales.flat(2)

// let newsales = sales.reduce((acc, curr) => acc + curr, 0)

// console.log(newsales);


// 6-masala

// let users = [
//   { name: "Ali", skills: ["html", "css", "js"] },
//   { name: "Vali", skills: ["node", "js", "mongo"] },
//   { name: "Hasan", skills: ["css", "figma"] }
// ];
// let users = users.flatMap(user => user.skills).filter(skill => skill.includes("js")); 
// console.log(users);




//8////////////////////////////////////////


// let athletes = [
//   { name: "Ali", time: 12.5 },
//   { name: "Vali", time: 11.8 },
//   { name: "Hasan", time: 12.1 }
// ];

// athletes = athletes.sort((a, b) => a.time - b.time)
// console.log(athletes);




// 9 masala//////////////////////////////////////


// let data = [5, 10, 15, 20, 25, 30];
// data.fill(0,4,6)
// let newdata = data.copyWithin(0,1)
// console.log(newdata);





// let results = [
//   { name: "Ali", score: 78 },
//   { name: "Vali", score: 92 },
//   { name: "Hasan", score: 55 },
//   { name: "Husan", score: 66 }
// ];
// let sum = results.filter((obj)=> obj.score > 60)
//   sum.sort((a, b)=> b.score - a.score)
// for (let s of sum) {
//   if (s.score >= 90) s.grade = "A";
//  else if(s.score >= 75) s.grade = "B"
//  else s.grade = "C"
// }

// let res = sum.reduce((acc, curr) => acc + curr.score, 0) / sum.length
// console.log(sum);
// console.log(+res.toFixed(2));


// savol

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.



function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird));
}





