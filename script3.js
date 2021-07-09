let arr1 = [4, 5, 7, 8];

const getMax = (a, b) => Math.max(a, b);

// const reducerFn = (accumulator, currentValue) => {
//   console.log("accumulator:", accumulator);
//   console.log("currentvalue:", currentValue);
//   return accumulator * currentValue;
// };

console.log(arr1.reduce(getMax, []));
