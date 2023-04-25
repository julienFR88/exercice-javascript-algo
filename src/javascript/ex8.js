function checkPalindrom(str) {
  if (str == str.split('').reverse().join('')) {
    return true
  } else {
    return false
  }
}

console.log('ex8');
console.log(checkPalindrom('kayak'));
console.log(checkPalindrom('camion'));
console.log("-------------------------------------");