function getVowels(string) { // count the number of vowels in a string
  var Vowels = 'aAeEiIoOuU';
  var vowelsCount = 0; // initialize the number of vowels to 0
  for (var i = 0; i < string.length; i++) { // loop through each character in the string
    if (Vowels.indexOf(string[i]) !== -1) { // if the character is a vowel 
      vowelsCount += 1; // increment the number of vowels
    }
  }
  return vowelsCount; // return the number of vowels
}

console.log('ex7');
console.log("Le nombre de voyelles dans la phrase: " +
  "'J'adore les kebabs sauce andalouse'" + " est de " // count the number of vowels in the string
  + getVowels("J'adore les kebabs sauce andalouse")); // 14
console.log("-------------------------------------");