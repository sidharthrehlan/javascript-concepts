var swapValueAndSetNull = function (nums, i, j) {
  nums[i] = nums[j];
  nums.splice(j, 1);
  j--;
};

var removeElement = function (nums, val) {
  let j = nums.length - 1;

  if (nums.length === 0 || (nums.length === 1 && nums[1] === val)) {
    nums = [];
    return 0;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        if (i == j && nums[i] === val) {
          nums.splice(i, 1);
        } else if (nums[j] !== val) {
          swapValueAndSetNull(nums, i, j);
          j--;
        } else {
          //decrement j until j !== val
          while (j > i) {
            if (nums[j] !== val) {
              swapValueAndSetNull(nums, i, j);
              break;
            } else {
              nums.splice(j, 1);
              j--;
            }
            j--;
          }
        }
      }
    }
    return nums.length;
  }
};
