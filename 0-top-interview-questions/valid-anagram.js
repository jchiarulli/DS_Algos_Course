// 242. Valid Anagram
// Given two strings s and t , write a function
// to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only
// lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters?
// How would you adapt your solution to such case?

// TODO
// Fix this
// var isAnagram = function (s, t) {
//   if (s.length === t.length) {
//     const sObj = {};
//     const tObj = {};
//     for (let i = 0; i < s.length; i++) {
//       // console.log(s[i]);
//       if (sObj[s[i]] === undefined) {
//         sObj[s[i]] = 1;
//       } else {
//         sObj[s[i]] = sObj[s[i]] + 1;
//       }
//       // console.log(sObj[s[i]]);
//       if (tObj[t[i]] === undefined) {
//         tObj[t[i]] = 1;
//       } else {
//         tObj[t[i]] = tObj[t[i]] + 1;
//       }
//     }

//     for (const property in sObj) {
//       console.log("sObj Key", property);
//       console.log("sObj Value", sObj[property]);
//     }
//     return [sObj, tObj];
//   } else {
//     return false;
//   }
// };

// let s = "anagram";
// let t = "nagaram";

// console.log(isAnagram(s, t));

var isAnagram2 = function (s, t) {
  if (s.length === t.length) {
    sArray = s.split("");
    tArray = t.split("");
    sArray.sort();
    tArray.sort();

    for (let i = 0; i < s.length; i++) {
      if (sArray[i] !== tArray[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

let s = "anagram";
let t = "nagaram";

console.log(isAnagram2(s, t));
