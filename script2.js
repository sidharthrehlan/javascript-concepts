let arr = [2, 3, 'sidh', { a: 1, b: 3 }];

const sorted = arr.sort((a, b) => {
  if (typeof a === 'string') {
    return -1;
  } else if (typeof b === 'string') {
    return 1;
  } else if (typeof a === 'object') {
    return -1;
  } else if (typeof b === 'object') {
    return 1;
  }
});

console.log(sorted);
