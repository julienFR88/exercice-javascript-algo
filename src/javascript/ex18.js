
function fib(n) {
  if (n == 0) return [0]
  if (n == 1) return [0, 1]
  const arr = fib(n - 1)
  return [...arr, arr[n - 1] + arr[n - 2]]
}

console.log('ex18');
console.log(fib(10));
console.log("-------------------------------------");
