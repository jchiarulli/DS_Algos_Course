// Given an array, rotate the array to the right by
// k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can,
// there are at least 3 different ways to solve
// this problem.

// Could you do it in-place with O(1) extra space?

// TODO
// check inputs
// Optinal solutions

var rotate1 = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

var rotate2 = function (nums, k) {
  lastIndex = nums.length - 1;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < lastIndex; j++) {
      temp = nums[lastIndex - j];
      nums[lastIndex - j] = nums[lastIndex - j - 1];
      nums[lastIndex - j - 1] = temp;
    }
  }
};

var rotate3 = function (nums, k) {
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1];
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
};

nums = [-1, -100, 3, 99];
k = 2;

rotate1(nums, k);

console.log(nums);

nums = [-1, -100, 3, 99];

rotate2(nums, k);

console.log(nums);

nums = [-1, -100, 3, 99];

rotate3(nums, k);

console.log(nums);
