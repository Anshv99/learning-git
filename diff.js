function difference(a, b) {
  return a.filter((x) => !b.includes(x));
}
console.log(difference([1, 2, 3], [1, 2, 4]));