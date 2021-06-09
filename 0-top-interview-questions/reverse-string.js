// 344. Reverse String
// Write a function that reverses a string. The
// input string is given as an array of characters
// char[].

// Do not allocate extra space for another array,
// you must do this by modifying the input array
// in-place with O(1) extra memory.

// You may assume all the characters consist of
// printable ascii characters.

var reverseString1 = function (s) {
  let temp;
  const sLength = s.length;
  let j = sLength - 1;
  const numberOfSwaps = Math.floor(sLength / 2);
  for (let i = 0; i < numberOfSwaps; i++) {
    temp = s[i];
    s[i] = s[j - i];
    s[j - i] = temp;
  }
  return s;
};

s = ["a", "c", "b", "d"];
console.log(reverseString1(s));

// TODO
// Fix this implementation
var reverseString2 = function (s) {
  let left = 0;
  let right = s.length - 1;
  let temp;
  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }

  return s;
};

s = ["a", "c", "b", "d"];
console.log(reverseString2(s));

let a = s.join("");
console.log(a);
