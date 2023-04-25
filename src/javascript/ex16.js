function compare(a, b) {
  var y = a.split("").sort().join(""),
    z = b.split("").sort().join("");
  console.log(z === y
    ? a + " and " + b + " are anagrams!"
    : a + " and " + b + " are not anagrams."
  );
}

console.log('ex16');
console.log(compare('marseille', 'remailles'));
console.log(compare('marseille', 'premier'));
console.log("-------------------------------------");
