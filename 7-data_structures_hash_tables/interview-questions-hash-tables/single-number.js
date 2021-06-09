// Given a non-empty array of integers, every
// element appears twice except for one. Find that
// single one.

// Note:

// Your algorithm should have a linear runtime
// complexity. Could you implement it without using
// extra memory?

// Example 1:
// Input: [2,2,1]
// Output: 1

// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

// TODO
// Check inputs
// Improve solution using math & bitwise manipulations
// Look at other solutions
var singleNumber1 = function (nums) {
  const myObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (myObj[nums[i]]) {
      delete myObj[nums[i]];
    } else {
      myObj[nums[i]] = true;
    }
  }
  return Object.keys(myObj)[0];
};

nums = [4, 1, 2, 1, 2];
console.log(singleNumber1(nums));
