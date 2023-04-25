
function fib(n) { // function to find the first n fibonacci numbers
  if (n == 0) return [0] // if n is 0, return [0]
  if (n == 1) return [0, 1] // if n is 1, return [0, 1]
  const arr = fib(n - 1) // call the fib function recursively
  return [...arr, arr[n - 1] + arr[n - 2]] // return the array of fibonacci numbers
}

console.log('ex18');
console.log(fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log("-------------------------------------");
