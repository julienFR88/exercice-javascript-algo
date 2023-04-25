var a = ['kebab', 1, 'kebab', 2, '1'];
var unique = a.filter(onlyUnique);

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

console.log('ex15');
console.log(unique);
console.log("-------------------------------------");