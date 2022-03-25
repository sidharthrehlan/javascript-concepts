let sample = [1, 2, 3, 4, 5];

Array.prototype.map1 = function (cb) {
  let newArr = [];
  let oldArr = this;
  for (let i = 0; i < oldArr.length; i++) {
    let newItem = cb(oldArr[i], i, oldArr, this);
    newArr.push(newItem);
  }
  return newArr;
};

let sample2 = sample.map1((item) => {
  return item * 2;
});

console.log(sample2);
