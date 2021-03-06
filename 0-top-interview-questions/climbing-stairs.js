// TODO
// Improve solution

// 70. Climbing Stairs

// You are climbing a stair case. It takes n steps
// to reach to the top.

// Each time you can either climb 1 or 2 steps. In
// how many distinct ways can you climb to the top?

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the
// top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to
// the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

var climbStairs = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    let f0 = 1;
    let f1 = 2;
    let f;
    let i = 1;

    while (n - 1 > i) {
      f = f0 + f1;
      f0 = f1;
      f1 = f;
      i++;
    }
    return f;
  }
};

let n = 4;
console.log(climbStairs(n));
