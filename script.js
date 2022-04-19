arr = [1, 3, 5, 7, 8];
search = 7;

const findSearchEle = (arr, search) => {
  let result;
  const arrLen = arr.length;
  let start = 0,
    end = arrLen - 1;

  if (arrLen === 0) {
    result = 0;
  } else if (arrLen === 1 && arr[0] === search) {
    result = 0;
  } else if (search < arr[0]) {
    result = 0;
  } else if (arr[arrLen - 1] < search) {
    result = arrLen;
  } else {
    for (let i = 0; i < arrLen / 2; i++) {
      let middle = Math.floor((end - start) / 2);
      if (arr[middle] === search) {
        return middle;
      } else if (arr[start] === search) {
        return start;
      } else if (arr[end] === search) {
        return end;
      } else if (end - start === 1) {
        if (search < arr[start]) return start - 1;
        if (search > arr[end]) return end + 1;
        else return start + 1;
      } else if (search < arr[middle]) {
        end = middle;
      } else if (search > arr[middle]) {
        start = middle;
      }
    }
  }
  return result;
};

const result = findSearchEle(arr, search);
console.log(result);
