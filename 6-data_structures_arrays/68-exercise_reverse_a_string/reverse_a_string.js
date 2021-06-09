// Create a function that reverses a string:
// "Hi My name is Andrei" should be:
// "ierdnA si eman yM iH"

function reverse1(str) {
  reversedStr = [];
  for (let i = 0; i < str.length; i++) {
    reversedStr.push(str[str.length - 1 - i]);
  }
  return reversedStr.join("");
}

function reverse2(str) {
  reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr.join("");
}

// TODO
// determine time complexity
// divide array length in half
// check input
function reverse3(str) {
  strArray = str.split("");
  lastIndex = strArray.length - 1;

  for (let i = 0; i < lastIndex - i; i++) {
    temp = strArray[i];
    strArray[i] = strArray[lastIndex - i];
    strArray[lastIndex - i] = temp;
  }

  return strArray.join("");
}

str = "Hi My name is Andrei"; // length = 20

reversedStr1 = reverse1(str);
console.log(reversedStr1);

reversedStr2 = reverse2(str);
console.log(reversedStr2);

reversedStr3 = reverse3(str);
console.log(reversedStr3);

reverseStr4 = str.split("").reverse();
console.log(reverseStr4.join(""));
