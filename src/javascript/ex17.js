var Array = [4, -5, 0, 2, -67, 8, 10, -34];

function getPositiveNumbers(array) {
  return array.filter(function (value) {
    return value > 0;
  });
}

console.log('ex17');
console.log(getPositiveNumbers(Array));
console.log("-------------------------------------");