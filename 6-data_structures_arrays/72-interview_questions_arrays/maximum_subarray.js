// TODO
// Check inputs
// Remove repeated code
// O(n) solution
// Divide & Conquer Solution
var maxSubArray1 = function (nums) {
  let largestSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum > largestSum) {
      largestSum = sum;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum > largestSum) {
        largestSum = sum;
      }
    }
  }
  return largestSum;
};

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray1(nums));
