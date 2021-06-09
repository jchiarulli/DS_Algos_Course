// TODO
// Improve solution using the fact that it only
// contains lowercase English letters

// 387. First Unique Character in a String
// Given a string, find the first non-repeating
// character in it and return its index. If it
// doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only
// lowercase English letters.

var firstUniqChar1 = function (s) {
  const myObj = {};
  for (let i = 0; i < s.length; i++) {
    if (myObj[s[i]] !== undefined) {
      myObj[s[i]] = false;
    } else {
      myObj[s[i]] = i;
    }
  }

  for (const property in myObj) {
    if (myObj[property] !== false) {
      return myObj[property];
    }
  }
  return -1;
};

s = "aadadaad";
console.log("Answer:", firstUniqChar1(s));
