array = [5, 6, 1, 10, 4, 8, 2];

function mergeSort(array) {
  const half = array.length / 2;
  if (array.length == 1) {
    return array;
  }
  const leftArr = array.splice(0, half);
  let leftSort = mergeSort(leftArr);
  let rightSort = mergeSort(array);
  return merge(leftSort, rightSort);
}

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  if (left.length || right.length) {
    return [...arr, ...left, ...right];
  } else {
    return [...arr];
  }
}

console.log(mergeSort(array));
