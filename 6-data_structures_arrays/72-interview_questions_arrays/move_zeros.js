// Given an array nums, write a function to move
// all 0's to the end of it while maintaining the
// relative order of the non-zero elements.

// TODO
// Come up with improved solutions
// Come up with Space Optimal & Operation Optimal solution
// Understand & explain thout process
// check inputs
var moveZeroes1 = function (nums) {
  let numberOfZeros = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i = i - 1;
      numberOfZeros++;
    }
  }

  for (let j = 0; j < numberOfZeros; j++) {
    nums.push(0);
  }

  return nums;
};

var moveZeroes2 = function (nums) {
  let numberOfZeros = 0;

  for (let i = 0; i < nums.length - numberOfZeros; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i = i - 1;
      numberOfZeros++;
    }
  }

  return nums;
};

nums = [0, 0, 1, 0, 0, 1];

console.log(moveZeroes1(nums));

console.log(moveZeroes2(nums));
