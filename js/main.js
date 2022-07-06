const arr = [1, 2, 3, 3, 4, 5, 6, 6];
// reduce
let sumReduce = arr.reduce(function (a, b) {
  return a + b;
});
console.log(`SUM (reduce) => ${sumReduce}`);

// function + cycle
function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`SUM (function + cycle) => ${sum}`);
}
arraySum(arr);

// for of
let sum = 0;
for (let i of arr) {
  sum += i;
}
console.log(`SUM (for of) => ${sum}`);

// the largest element
function arrayLargeEl(arr) {
  let el = 0;
  for (let i = 1; i < arr.length; i++) {
    el = arr[0];
    if (el < arr[i]) {
      el = arr[i];
    }
  }
  console.log(`The largest element => ${el}`);
}
arrayLargeEl(arr);
// the smallest element
function arraySmallEl(arr) {
  let el = 0;
  for (let i = 1; i < arr.length; i++) {
    el = arr[0];
    if (el > arr[i]) {
      el = arr[i];
    }
  }
  console.log(`The smallest element => ${el}`);
}
arraySmallEl(arr);

// Math.arr largest
console.log(`Math.max => ${Math.max(...arr)}`);

// Math.arr smallest
console.log(`Math.minx => ${Math.min(...arr)}`);

// nemArr
class MyArray {
  constructor(arr) {
    this.arr = arr;
  }
  summary() {
    let summary = 0;
    for (let i of arr) {
      summary += i;
    }
    console.log(`MyArray SUM => ${summary}`);
  }
  maxElem() {
    let maxElem = Math.max(...arr);
    console.log(`MyArray MAX => ${maxElem}`);
  }
  minElem() {
    let minElem = Math.min(...arr);
    console.log(`MyArray MAX => ${minElem}`);
  }
}
const array1 = new MyArray(arr);
array1.summary();
array1.maxElem();
array1.minElem();
