function FirstFactorial(num) {
  if (num > 1) {
    let sum = num * FirstFactorial(num - 1);
    return sum;
  } else {
    return num;
  }
}

let result = FirstFactorial(4);
console.log(result);
