
function sumWithClosure(firstNum) {
  return function (b) {
    if (b === undefined) {
      return firstNum;
    } else {
      return firstNum + b;
    }
  }
}
console.log(sumWithClosure(5)(5))