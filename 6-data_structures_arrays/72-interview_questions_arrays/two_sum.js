// Brute Force

// TODO
// if no solution throw error or console.log
twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// TODO
// improve solution
twoSum2 = (nums, target) => {};

nums = [3, 2, 3];
target = 6;

console.log(twoSum1(nums, target));
