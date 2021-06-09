// 27. Remove Element

// Given an array nums and a value val, remove all
// instances of that value in-place and return the
// new length.

// Do not allocate extra space for another array,
// you must do this by modifying the input array
// in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't
// matter what you leave beyond the new length.

// var removeElement1 = function (nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
// };

// let nums = [3, 2, 2, 3];
// let val = 3;

// removeElement1(nums, val);
// console.log(nums);

// TODO
// Fix this solution using 2 pointers
var removeElement2 = function (nums, val) {
  let i = 1;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === val) {
      // nums.splice(i, 1);
      // i--;
      nums[j] = nums[i];
      console.log("nums[i]", nums[i]);
      console.log("nums[j]", nums[j]);
      j++;
    }
    i++;
  }
};

let nums = [3, 2, 2, 3];
let val = 3;

removeElement2(nums, val);
console.log(nums);
