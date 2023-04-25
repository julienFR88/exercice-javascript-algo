const array = [1, 2, 3, 18, 5];


function MaxNum(Array) {
  return Math.max.apply(null, Array);
}

console.log('ex5');
console.log(MaxNum(array));
console.log("-------------------------------------");