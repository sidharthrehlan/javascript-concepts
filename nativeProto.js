let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.toString());
console.log(arr);
Array.prototype.toString = function () {
  let str = "";

  for (let i = 0; i < this.length; i++) {
    str = str + this[i] + "a";
  }
  return str;
};

console.log(arr.toString());
