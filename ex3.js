function baseNumberConvertor(number, m, n) {
  if (m == 10) {
    return number.toString(n);
  } else if (n == 10) {
    return parseInt(number, m);
  } else {
    let newNum = parseInt(number, m);
    return newNum.toString(n);
  }
}
console.log(baseNumberConvertor(101, 2, 16));
