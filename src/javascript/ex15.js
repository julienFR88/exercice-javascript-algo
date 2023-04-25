var a = ['kebab', 1, 'kebab', 2, '1']; // array of strings and numbers
var unique = a.filter(onlyUnique); // onlyUnique is a function that returns true if the value is unique

function onlyUnique(value, index, array) { // function to check if the value is unique
  return array.indexOf(value) === index; // if the index of the value is equal to the current index, then the value is unique
}

console.log('ex15'); 
console.log(unique); // ['kebab', 1, 2, '1']
console.log("-------------------------------------");