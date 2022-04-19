arr = [1, 3];
search = 2;

const recursion = (arr, search, start, end) => {
  if (search < arr[start]) {
    return start === 0 ? 0 : start - 1;
  }
  if (search > arr[end]) {
    return end + 1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === search) return mid;

  if (arr[mid] > search) return recursion(arr, search, start, mid - 1);
  else return recursion(arr, search, mid + 1, end);
};

const findSearchEle = (arr, search) => {
  return recursion(arr, search, 0, arr.length - 1);
};

const result = findSearchEle(arr, search);
console.log(result);
