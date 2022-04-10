let string = "aliz";
let string2 = "AlIZ";

function caesarCipher(text, num) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    let char;
    if (element.toUpperCase() == element) {
      char = String.fromCodePoint(
        ((element.codePointAt(0) + num - 65) % 26) + 65
      );
    } else {
      char = String.fromCodePoint(
        ((element.codePointAt(0) + num - 97) % 26) + 97
      );
    }
    result += char;
  }
  return result;
}

console.log(caesarCipher(string, 3));
console.log(caesarCipher(string2, 3));
