const test = (str) => { // check if a string is a pangram
  const strUpper = str.toUpperCase(); // convert the string to uppercase

  for (let i = 65; i <= 90; i++) { // loop through the uppercase alphabet
    if (!strUpper.includes(String.fromCharCode(i))) { // if the string does not include a letter from the alphabet, then it is not a pangram
      return false; // return false if the string is not a pangram
    }
  }
  return true;
};

console.log('ex13');
console.log(test('Portez ce vieux whisky au juge blond qui fume')); // true
console.log(test('Portez ce vieux whisky')); // false
console.log("-------------------------------------");
