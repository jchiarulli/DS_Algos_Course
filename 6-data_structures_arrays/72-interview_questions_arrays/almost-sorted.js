var almostSorted = function (nums) {
  const myObj = {};
  const duplicates = {};
  for (let i = 0; i < nums.length; i++) {
    if (myObj[nums[i]] === undefined) {
      myObj[nums[i]] = nums[i];
      console.log("myObj", myObj[nums[i]]);
    } else {
      duplicates[nums[i]] = nums[i];
      console.log("dups", duplicates[nums[i]]);
    }
  }
  //   return myObj, duplicates;
};

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// nums = [1, 2, 3, 1];
almostSorted(nums);
// console.log(a);
