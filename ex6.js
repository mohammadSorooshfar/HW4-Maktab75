let str = "learn javascript";
function divideStr(string = "", length) {
  let result = [];
  let subStr = "";
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (element != " ") {
      subStr += element;
    }
    if (subStr.length == length || i == string.length - 1) {
      result.push(subStr);
      subStr = "";
    }
  }
  return result;
}
console.log(divideStr(str, 2));
console.log(divideStr(str, 3));
