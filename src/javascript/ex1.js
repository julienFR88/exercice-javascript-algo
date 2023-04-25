function sumation(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (isNaN(a) || isNaN(b)) alert("wrong input")
  else return a + b;
}
console.log("-------------------------------------");
console.log('ex1');
console.log(sumation(2, 1));
console.log("-------------------------------------");