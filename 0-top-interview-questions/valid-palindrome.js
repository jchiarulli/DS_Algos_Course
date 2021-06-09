// 125. Valid Palindrome

// Given a string, determine if it is a palindrome,
// considering only alphanumeric characters and
// ignoring cases.

// Note: For the purpose of this problem, we define
// empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// Constraints:

// s consists only of printable ASCII characters.

// string -> array use split()

var isPalindrome1 = function (s) {
  const a = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  let left = 0;
  let right = a.length - 1;
  while (left < right) {
    if (a[left] !== a[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

s = "A man, a plan, a canal: Panama";
// s = "race a car";
console.log(isPalindrome1(s));

var isPalindrome2 = function (s) {
  const a = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  let left = 0;
  let right = a.length - 1;
  while (left < right) {
    if (a[left] !== a[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

s = "A man, a plan, a canal: Panama";
// s = "race a car";
console.log(isPalindrome2(s));
