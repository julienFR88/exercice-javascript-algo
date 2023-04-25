let ascending = arr => arr.every((x, i, a) => x < (a[i + 1] || x + 1));

console.log('ex6');
console.log(ascending([2, 10, 99, 150]));
console.log(ascending([21, 10, 99, 150]));
console.log("-------------------------------------");
