function longestStringReduce(arr) { // function to find the longest string in an array
  return arr.reduce((a, b) => a.length < b.length ? b : a, ""); //(a.length < b.length ? b : a = if the length of the accumulator is less than the length of the current value, then return the current value, otherwise return the accumulator)
}

console.log('ex9');
console.log(longestStringReduce(['javascript', 'php', 'html', 'json'])); // javascript
console.log("-------------------------------------");