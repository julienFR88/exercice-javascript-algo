var Array = [4, -5, 0, 2, -67, 8, 10, -34]; // array of numbers

function getPositiveNumbers(array) { // function to get positive numbers from an array
  return array.filter(function (value) { // filter out negative numbers from array
    return value > 0; // return value if value is greater than 0
  });
}

console.log('ex17');
console.log(getPositiveNumbers(Array)); // [4, 2, 8, 10]
console.log("-------------------------------------");