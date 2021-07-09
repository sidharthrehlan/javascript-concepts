const sum = (a, b) => {
  return a + b;
};

//using curring

const curry = (fn) => {
  return (a) => {
    return (b) => {
      return fn(a, b);
    };
  };
};

const sumCurry = curry(sum);
console.log(sumCurry(1)(2));
