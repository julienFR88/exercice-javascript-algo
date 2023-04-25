function longestStringReduce(arr) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}

console.log('ex9');
console.log(longestStringReduce(['javascript', 'php', 'html', 'json']));
console.log("-------------------------------------");