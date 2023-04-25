function getVowels(string) {
  var Vowels = 'aAeEiIoOuU';
  var vowelsCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (Vowels.indexOf(string[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log('ex7');
console.log("Le nombre de voyelles dans la phrase: " +
  "'J'adore les kebabs sauce andalouse'" + " est de "
  + getVowels("J'adore les kebabs sauce andalouse"));
console.log("-------------------------------------");