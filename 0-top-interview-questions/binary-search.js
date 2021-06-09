var recursiveBinarySearch = function (A, target, lowIndex, highIndex) {
  if (highIndex >= lowIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);

    if (A[midIndex] === target) {
      return true;
    } else if (A[midIndex] < target) {
      return recursiveBinarySearch(A, target, midIndex + 1, highIndex);
    } else {
      return recursiveBinarySearch(A, target, lowIndex, midIndex - 1);
    }
  } else {
    return false;
  }
};

A = [1, 3, 8, 7, 9];
target = 9;
lowIndex = 0;
highIndex = A.length - 1;

console.log(recursiveBinarySearch(A, target, lowIndex, highIndex));

// 704. Binary Search

// Given a sorted (in ascending order) integer array
// nums of n elements and a target value, write a
// function to search target in nums. If target
// exists, then return its index, otherwise
// return -1.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so
// return -1

// Note:

// You may assume that all elements in nums are
// unique.
// n will be in the range [1, 10000].
// The value of each element in nums will be in the
// range [-9999, 9999].

var search = function (nums, target) {
  let lowIndex = 0;
  let highIndex = nums.length - 1;

  while (highIndex >= lowIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);

    if (nums[midIndex] === target) {
      return midIndex;
    } else if (A[midIndex] < target) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }

  return -1;
};

nums1 = [1, 3, 8, 7, 9];
target1 = 9;

console.log(search(nums1, target1));
