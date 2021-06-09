// 88. Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2,
// merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and
// nums2 are m and n respectively.
// You may assume that nums1 has enough space
// (size that is equal to m + n) to hold additional
// elements from nums2.

// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// Constraints:

// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n

var merge = function (nums1, m, nums2, n) {
  let j = 0;
  let k = 0;
  let temp;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[j] <= nums2[k]) {
      if (j >= m) {
        nums1[j + 1] = nums2[k];
        k++;
      }
      j++;
    } else if (nums2[k] < nums1[j]) {
      temp = nums1[j];
      nums1[j] = nums2[k];
      nums1[j + 1] = temp;
      j++;
      k++;
    }
  }

  return nums1;
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;

console.log(merge(nums1, m, nums2, n));
