const isPrime = num => { // check if a number is prime
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) { // s = square root of num // i = 2 because 1 is not prime and 0 is not prime // i <= s because if i > s, then i * s > num, so num is not prime
    if (num % i === 0) return false; // if num is divisible by i, then it is not prime
  }
  return num > 1; // if num is greater than 1, then it is prime
}
console.log('ex10');
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log("-------------------------------------"); 

// get the first n prime numbers

