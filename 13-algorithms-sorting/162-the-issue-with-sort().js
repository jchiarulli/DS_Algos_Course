const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];

// JavaScript converts the array to an array
// of strings and sorts them based on unicode
// values of the characters
// What sort algorithm is used under the hood
// depends on the browser
// Different languages are also sorted differently
// since there are different unicode values for
// some of the characers
console.log(basket.sort());

console.log("2".charCodeAt(0));
console.log("65".charCodeAt(0));
console.log("34".charCodeAt(0));
console.log("7".charCodeAt(0));

// See localeCompare for handling different
// language input
// View MDN page on sorting

// sorts the numbers how one would expect
console.log(
  basket.sort(function (a, b) {
    return a - b;
  })
);
