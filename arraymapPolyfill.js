let arr = [1, 2, 3];

console.log(arr.map((i) => i * 2));

Array.prototype.map2 = function (callback) {
  let newArr = [];
  let i = 0;
  while (i < this.length) {
    newArr.push(callback(this[i]));
    i++;
  }

  return newArr;
};

console.log(arr.map2((i) => i + "a"));
