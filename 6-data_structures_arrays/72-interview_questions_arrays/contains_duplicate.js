// Given an array of integers, find if the array
// contains any duplicates.

// Your function should return true if any value
// appears at least twice in the array, and it
// should return false if every element is
// distinct.

// TODO
// Use sorting for a more optimal solution
// Use a hash table for a more optimal solution
// check input
var containsDuplicate1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

var containsDuplicate2 = function (nums) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

var containsDuplicate3 = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    }
    map[nums[i]] = true;
  }
  return false;
};

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// nums = [1, 2, 3, 1];

console.log(containsDuplicate1(nums));
console.log(containsDuplicate2(nums));
console.log(containsDuplicate3(nums));
