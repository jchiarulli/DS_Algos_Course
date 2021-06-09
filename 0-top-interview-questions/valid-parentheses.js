// 20. Valid Parentheses

// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']', determine if
// the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of
// brackets.
// Open brackets must be closed in the correct
// order.

var isValid = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "(" && (s[i + 1] !== "[" || s[i + 1] !== ")")) {
      return false;
    } else if (s[i] === "(" && s[i + 1] !== "{") {
    }
  }
};
