function sumation(a, b) { // function to add two numbers
  a = parseInt(a); // parseInt(a) converts a to an integer
  b = parseInt(b);
  if (isNaN(a) || isNaN(b)) alert("wrong input") // if a or b is not a number, then alert the user
  else return a + b; // if a and b are numbers, then return the sum of a and b
}
console.log("-------------------------------------");
console.log('ex1');
console.log(sumation(2, 1)); // 3
console.log("-------------------------------------");