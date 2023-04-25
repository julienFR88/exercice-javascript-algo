const Sum = (arr) => { // function to find the sum of all the values in an array
return arr.reduce((total, current) => { // return the sum of all the values in an array
    return total + current; // return the sum of the accumulator and the current value
  }, 0); // 0 is the initial value of the accumulator
}
console.log('ex4');
console.log(Sum([1, 3, 5, 7, 9])); // 25
console.log("-------------------------------------");