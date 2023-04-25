const luhnCheck = num => {  // check if a number is prime
  let arr = (num + '') 
    .split('') 
    .reverse()
    .map(x => parseInt(x)); // convert the number to a string, split the string into an array of characters, reverse the array, and convert each character back to a number
  let lastDigit = arr.splice(0, 1)[0]; // remove the last digit from the array and store it in lastDigit
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0); // sum all the digits in the array
  sum += lastDigit; // add the last digit to the sum
  return sum % 10 === 0; // if the sum is divisible by 10, then the number is valid
};

console.log('ex19');
console.log(luhnCheck(4532015118016623)); // true
console.log(luhnCheck(4532015118016622)); // false
console.log("-------------------------------------");
