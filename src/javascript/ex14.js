var f = []; // initialize array
function factorial(n) { // function to find the factorial of a number
  if (n == 0 || n == 1) // if n is 0 or 1
    return 1; // return 1 because 0! = 1! = 1
  if (f[n] > 0) // if the factorial of n has already been calculated
    return f[n]; // return the factorial of n
  return f[n] = factorial(n - 1) * n; // return the factorial of n by calling the factorial function recursively
}

console.log('ex14');
console.log(factorial(10)); // 3628800
console.log("-------------------------------------");