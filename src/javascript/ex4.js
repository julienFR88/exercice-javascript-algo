const Sum = (arr) => {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
}
console.log('ex4');
console.log(Sum([1, 3, 5, 7, 9]));
console.log("-------------------------------------");