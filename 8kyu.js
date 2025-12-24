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
function addFive(num) {
  return num + 5;
}
