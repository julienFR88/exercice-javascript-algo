let ascending = arr => arr.every((x, i, a) => x < (a[i + 1] || x + 1));
// check if an array is in ascending order
// x < (a[i + 1] || x + 1) checks if the current value is less than the next value
// a[i + 1] || x + 1 checks if the next value exists, if it doesn't exist, then use the current value + 1

console.log('ex6');
console.log(ascending([2, 10, 99, 150])); // true
console.log(ascending([21, 10, 99, 150])); // false
console.log("-------------------------------------");
