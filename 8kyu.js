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







var OrderPeople = function(people){
  return people.sort((a,b)=>a.age -b.age ); 
}


