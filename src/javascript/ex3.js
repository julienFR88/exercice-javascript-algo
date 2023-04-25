
function check(i) { // check if a number is even
  if (i%2 == 0) { // if i is divisible by 2, then it is even
    return true; // return true if i is even
  } else { // if i is not divisible by 2, then it is odd
    return false;
  }
}

console.log("ex3");
console.log(check(2)); // true
console.log(check(3)); // false
console.log("-------------------------------------");