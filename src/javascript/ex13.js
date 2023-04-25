const test = (str) => {
  const strUpper = str.toUpperCase();

  for (let i = 65; i <= 90; i++) {
    if (!strUpper.includes(String.fromCharCode(i))) {
      return false;
    }
  }
  return true;
};

console.log('ex13');
console.log(test('Portez ce vieux whisky au juge blond qui fume'));
console.log(test('Portez ce vieux whisky'));
console.log("-------------------------------------");
