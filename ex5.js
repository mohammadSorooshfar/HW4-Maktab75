let names = [
  { name: "Ali", family: "Ziaei" },
  { name: "AmirAli", family: "Gharib" },
  { name: "Hossein", family: "Rahimi" },
  { name: "mohammad", family: "sorooshfar" },
];
function findName(names = [], start, end) {
  let result = [];
  names.forEach((element) => {
    if (
      element.name[0] == start &&
      element.name[element.name.length - 1] == end
    ) {
      result.push(element);
    }
  });
  return result;
}
console.log(findName(names, "A", "i"));
