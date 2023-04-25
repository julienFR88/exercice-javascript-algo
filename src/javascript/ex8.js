function checkPalindrom(str) { // check if a string is a palindrome 
  if (str == str.split('').reverse().join('')) { // split the string into an array of characters, reverse the array, join the array back into a string, and compare the original string with the reversed string
    return true // if the strings are equal, then the string is a palindrome
  } else {
    return false
  }
}

console.log('ex8');
console.log(checkPalindrom('kayak')); // true
console.log(checkPalindrom('camion')); // false
console.log("-------------------------------------");