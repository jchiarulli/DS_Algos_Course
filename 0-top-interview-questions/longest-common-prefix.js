// TODO
// 14. Longest Common Prefix
// Write a function to find the longest common
// prefix string amongst an array of strings.

// If there is no common prefix, return an empty
// string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among
// the input strings.

// Note:

// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      console.log(strs[i][j]);
    }
  }
};

let strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);
