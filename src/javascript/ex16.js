function compare(a, b) { // function to compare two strings
  var y = a.split("").sort().join(""), // split the strings into arrays of characters, sort the arrays, and join the arrays back into strings
    z = b.split("").sort().join(""); // y and z are the sorted strings
  console.log(z === y // compare the sorted strings
    ? a + " and " + b + " are anagrams!" // if the strings are equal, then the strings are anagrams
    : a + " and " + b + " are not anagrams." // if the strings are not equal, then the strings are not anagrams
  );
}

console.log('ex16');
console.log(compare('marseille', 'remailles')); // marseille and remailles are anagrams!
console.log(compare('marseille', 'premier')); // marseille and premier are not anagrams.
console.log("-------------------------------------");
