const EvenNumbers = (inputs) => inputs.filter(x => x % 2 === 0); // filter out odd numbers from inputs // x % 2 === 0 checks if x is even

console.log('ex11');
console.log(EvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]
console.log("-------------------------------------");