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

function smash(words) {
  let sentence = "";

  for (let i = 0; i < words.length; i++) {
    sentence += words[i];
    if (i !== words.length - 1) {
      sentence += " ";
    }
  }

  return sentence;
}



