const array = [1, 2, 3, 18, 5]; // array of numbers


function MaxNum(Array) { // function to find the largest number in an array
  return Math.max.apply(null, Array); // Math.max.apply(null, Array) returns the largest number in an array
}

console.log('ex5');
console.log(MaxNum(array)); // 18
console.log("-------------------------------------");