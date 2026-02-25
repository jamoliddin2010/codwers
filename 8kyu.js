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



// function gooseFilter(birds) {
//   let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter(bird => !geese.includes(bird));
// }













// savol
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]






// javob
// function filter_list(l) {0
//   return l.filter(x => typeof x === 'number');
// }

// It's Friday the 13th, and Jason is ready for his first killing spree!

// Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

// Ruby, Python, Crystal:

// counselors = [["Chad", 2], ["Tommy", 9]]
// jason = 7
// JavaScript:

// let counselors = [["Chad", 2], ["Tommy", 9]];
// let jason = 7;
// PHP:

// $counselors = [["Chad", 2], ["Tommy", 9]];
// $jason = 7;
// Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

// Happy Friday the 13th!

// javob

// function killcount(counselors, jason) {
//   let killed = [];
//   for (let i = 0; i < counselors.length; i++) {
//     if (counselors[i][1] < jason) {
//       killed.push(counselors[i][0]);
//     }
//   }
//   return killed;
// }

// savol

// r input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) return [];

//   let positives = input.filter(n => n > 0).length;
//   let negatives = input.filter(n => n < 0).reduce((sum, n) => sum + n, 0);

//   return [positives, negatives];
// }




// savol

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// javob

// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.indexOf("needle")}`;
// }


// savol
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []



// javob
// function solution(nums){
//   return nums ? nums.sort((a, b) => a - b) : [];
// }







// savol
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/


// javob
// function unusualFive() {
//   return 'abcde'.length;
// }



// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// Examples
// 1
// 6
// +
// 1
// 8
// 2
// 14
// 2
// 6
// +
// 3
// 9
// 5
// 15
// +
// ​
  
// 1
// 1
// 2
// ​
  
// 6
// 8
// 14
// ​
 
// ​
  
// +
// ​
  
// 2
// 3
// 5
// ​
  
// 6
// 9
// 15
// ​
 
// ​
 
 

// 1
// 2
// 2
// +
// 8
// 1
// 1
// 10
// 3
// 7
// 2
// +
// 9
// 7
// 11
// +
// ​
  
// 1
// 1
// ​
  
// 2
// 8
// 10
// ​
  
// 2
// 1
// 3
// ​
 
// ​
  
// +
// ​
  
// 7
// 7
// ​
  
// 2
// 9
// 11
// ​
 
// ​



// let add = (n1, n2, max = 0, str = "") => {
//   n1 > n2 ? (max = n1) : (max = n2);
//   let arr1 = `${n1}`.split("");
//   let arr2 = `${n2}`.split("");
//   for (let i = 1; i <= `${max}`.length; i++)
//     str = (+arr1.at(-i) || 0) + (+arr2.at(-i) || 0) + str;
//   return +str;
// };



// savol
// When sorted by "a", this:

// [
//   {"a": 1, "b": 3},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 4, "b": 12}
// ]
// should return:

// [
//   {"a": 4, "b": 12},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 1, "b": 3}
// ]






// javob


// function sortByValue(arr, sortBy) {
//   return arr.sort((a, b) => b[sortBy] - a[sortBy]);
// }

// function type(value) {
//   if (Number.isNaN(value)) return 'number';
//   if (Array.isArray(value)) return 'array';
//   if (value === null) return 'null';
//   return typeof value;
// }



// function type(v) {
//   if (Array.isArray(v)) return "array";
//   if (v instanceof Date) return "date";
//   return typeof v;
// }


// f=a=>{r=[];for(i=a[0];i<a.at(-1);i++)!a.includes(i)&&r.push(i);return r}









// Write function which will create a string from a list of strings, separated by space.

// Example:

// ["hello", "world"] -> "hello world"




// function sentence(list) {
//   return list.join(' ');




// }




// savol
// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// (In C# Integer means all integer Types like Int16,Int32,.....)

// Examples
// powerOf4(1024) // returns true
// powerOf4(44) // returns false
// powerOf4("not a positive integer") // returns false



// function powerOf4(n) {
//   console.log(n)
//   if(n===1|| n===0 || n===4) return true;
//   if(Number.isInteger(n)&& Number.isInteger(Math.pow(1/4))) return true;
//      return false;
// }; 


// savol
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5] [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5] [] --> [] You can assume that all values are integers. Do not mutate the input array.







function invert(array) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(array[i] * -1);
  }
  return a;
}



// savol

// The number is a basic data type in javascript. javascript also supports Number objects. The object is the original value of the package object. When necessary, JavaScript automatically converts between the original data and the objects. You can explicitly create a Number object with the constructor Number(). Although it is not necessary to do so. Usage:

// var num=new Number(value);
// Parameter value is the value of the Number object to be created or the value to be converted into a numeric value.

// Constructor Number() can be used without operator new and directly as a transformation function to use. In this way, when the Number is called, it transforms itself into a number and then returns the converted value (or NaN). Usage:

// var num=Number(value);
// Number object has two generic object properties: constructor and prototype. all the objects in JS have these two properties. they are two very important attributes. because of their importance and complexity, we will learn it in the future.

// In addition to the above two, the Number objects have five attributes (or called constant):

// MAX_VALUE: The maximum number that can be expressed in JS. Usage:Number.MAX_VALUE. Its approximate value is 1.7976931348623157e+308

// MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage:Number.MIN_VALUE. Its approximate value is 5e-324

// NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) or the result of the method are not numbers, return NaN. Usage:Number.NaN. It can be simplified and replaced with NaN.

// Please note: the results of comparison between NaN and other values are always not equal(including its own). Therefore, can not be compared with Number.NaN to detect a value is not a number but can only call isNaN() to compare.

// NEGATIVE_INFINITY: The value represents the negative infinity. Usage:Number.NEGATIVE_INFINITY. When a number is generated in an arithmetic operation or function and it smaller than -Number.MAX_VALUE return this value. It can be simplified and replaced with -Infinity.

// POSITIVE_INFINITY: The value represents the positive infinity. Usage:Number.POSITIVE_INFINITY. When a number is generated in an arithmetic operation or function and it larger than Number.MAX_VALUE return this value. It can be simplified and replaced with Infinity.

// Ok, lesson is over. let's us do some task with Number objects.

// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().






// function whatNumberIsIt(n) {
//   if (Number.isNaN(n)) return "Input number is Number.NaN";
//   if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
//   if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
//   if (n === Number.POSITIVE_INFINITY) return "Input number is Number.POSITIVE_INFINITY";
//   if (n === Number.NEGATIVE_INFINITY) return "Input number is Number.NEGATIVE_INFINITY";
//   return "Input number is " + n;
// }

// savol
// Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

// Example:

// ['a','b',['c','d',['e']]] , 'e' --> true
// ['a','b',['c','d',['e']]] , 'a' --> true
// ['a','b',['c','d',['e']]] , 'f' --> false


// let locate = (arr, value)=> {
//   const flatArr = arr.flat(Infinity);

//   if(flatArr.includes(value)) {
//     return true;
//   } else {
//     return false;
//   }
// }




// savol
// Write a function loopArr that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

// array - non-empty array of elements of any type;
// direction - 'left' or 'right' - tells how to loop array;
// steps - number of steps to loop array (less or equal to array size);
// Examples:

// loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
// should produce result: [87, 45, 8, 8, 1, 5]

// loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
// should produce result: [8, 8, 1, 5, 87, 45]





// function loopArr(arr, direction, steps) {
//   let res = arr.slice(); 

//   for (let i = 0; i < steps; i++) {
//     if (direction === 'left') {
//       res.push(res.shift());
//     } else if (direction === 'right') {
//       res.unshift(res.pop());
//     }
//   }

//   return res;
// }

// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left. ishlab ber


// function anyArrows(arrows) {
//   return arrows.some(arrow => arrow.damaged !== true);
// }




// savol
// Complete the function which converts a binary number (given as a string) to a decimal number.






// function binToDec(bin) {
//   return parseInt(bin, 2);
// }

// savol
// Description:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// function reverseSeq(n) {
//   const result = [];
//   for (let i = n; i >= 1; i++) {
//     result.push(i);
//   }
//   return result;
// }
// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// (3, 5.0) --> [5.0, 10.0, 15.0]

// function multiples(m, n) {
//   let result = [];
//   for (let i = 1; i <= m; i++) {
//     result.push(i * n);
//   }
//   return result;
// }
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3


// function getRealFloor(n) {
//   if (n <= 0) return n;
//   if (n < 13) return n - 1;
//   return n - 2;
// }


// savol
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8




// function rowSumOddNumbers(n) {
//   return n ** 3;
// }

// savol

// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.

// All inputs will be valid.
// Rick is only interested in solutions that are faster than his, which has a running time of O(n log n).
// [2, 6, 3]                      => 18 = 6 * 3
// [2, 1, 5, 0, 4, 3]             => 20 = 5 * 4
// [7, 8, 9]                      => 72 = 8 * 9
// [33, 231, 454, 11, 9, 99, 57]  => 104874 = 231 * 454







// function maxProduct(numbers) {
//   let max1 = 0;
//   let max2 = 0;

//   for (let num of numbers) {
//     if (num > max1) {
//       max2 = max1;
//       max1 = num;
//     } else if (num > max2) {
//       max2 = num;
//     }
//   }

//   return max1 * max2;
// }






// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// Shorten the code such that it meets the requirements.

// A few hints:

// Try researching about built-in Array methods; they may help shorten your code a lot
// Good luck!








// function sumSquares(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i] * array[i];
//   }

//   return sum;
// }

// Вы сказали:
// You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

// In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.

// In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

// function toFreud(string) {
//   if (!string) return "";
//   return string.split(" ").map(() => "s").join(" ");
// }




// Description: You are given two interior angles (in degrees) of a triangle.  Write a function to return the 3rd.  Note: only positive integers will be tested. 


// function otherAngle(a, b) {
//   return 180 - (a + b);
// }




// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here's an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.




// function listToArray(list) {
//   const result = [];
  
//   while (list !== null) {
//     result.push(list.value);
//     list = list.next;
//   }
  
//   return result;
// }


// savol
// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6
// Functional ProgrammingFundamentals



// function add(n) {
//   return function(x) {
//     return x + n;
//   };
// }
// savol
// For this exercise you should create a JavaScript class called Animal. Its constructor() takes in name and type parameters. It should have a toString() method that returns a formatted string containing the name and type properties. It should also allow the name property to be set.

// The following is an example of how the class could be used and what the expected return values should be:

// const dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // 'dog'
// dog.name; // 'Max'
// dog.name = 'Lassie';
// dog.name; // 'Lassie'

// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   toString() {
//     return `${this.name} is a ${this.type}`;
//   }
// }




// savol
// class Animal {
//     constructor(name, species, age, health, weight, color) {
//         this.name = name;
//         this.species = species;
//         this.age = age;
//         this.health = health;
//         this.weight = weight;
//         this.color = color;
//     }
// }
// function makeClass (...arr){
//   return class{
//     constructor(...a){
//               for (let i = 0; i < arr.length; i++) {
//             this[arr[i]] = a[i];
//         }
//     }
//   }
// }

// savol
// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2
// Assume that [a,b,c,d] and the slope are all integers (no floating numbers!)


// function slope(points) {
//   const [a, b, c, d] = points;
  
//   if (c - a === 0) {
//     return "undefined";
//   }
  
//   return String((d - b) / (c - a));
// }
// savol
// We can rewrite it using a for loop, like this:

// function sum1_100(){
//   for (let sum=0,num=1;num<=100;num++){
//     sum+=num;
//   }
//   return sum;
// }
// As you see, there are three parts in the parentheses, separated by ";". The first part, var sum=0,num=1, is the initialization. This part will run before the loop starts. The second part, num<=100 is the conditional expression. The conditional expression is checked before the start of each time through the loop. When the value of the expression is false, the loop will be terminated. The third part, num++ will run after the code block, and is usually used for increasing and decreasing variables.

// For the example above, the running order of the code is:
// function pickIt(arr) {
//   let odd = [], even = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     } else {
//       odd.push(arr[i]);
//     }
//   }
  
//   return [odd, even];
// }
// savol
// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// function dominator(arr) {
//   const counts = {};
//   const half = Math.floor(arr.length / 2);

//   for (let num of arr) {
//     counts[num] = (counts[num] || 0) + 1;

//     if (counts[num] > half) {
//       return num;
//     }
//   }

//   return -1;
// }
// savol
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
// //       I
// function drawStairs(n) {
//   let result = [];
  
//   for (let i = 0; i < n; i++) {
//     result.push(" ".repeat(i) + "I");
//   }
  
//   return result.join("\n");
// }

// savol
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// function greet(name, owner) {
//   if (name === owner) {
//     return "Hello boss";
//   } else {
//     return "Hello guest";
//   }
// }

// Everybody know that you passed to much time awake during night time...

// Your task here is to define how much coffee you need to stay awake after your night. You will have to complete a function that take an array of events in arguments, according to this list you will return the number of coffee you need to stay awake during day time. Note: If the count exceed 3 please return 'You need extra sleep'.

// The list of events can contain the following:

// You come here, to solve some kata ('cw').
// You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').
// You just watch a movie ('movie').
// Other events can be present and it will be represent by arbitrary string, just ignore this one.
// Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.


function howMuchCoffee(events) {
  const validEvents = ['cw', 'cat', 'dog', 'movie'];
  let coffee = 0;

  for (let event of events) {
    const lower = event.toLowerCase();
    
    if (validEvents.includes(lower)) {
      coffee += (event === lower) ? 1 : 2;
    }
  }

  return coffee > 3 ? 'You need extra sleep' : coffee;
}