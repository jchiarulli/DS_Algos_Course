// Create a function that reverses a string:
// "Hi My name is Andrei" should be:
// "ierdnA si eman yM iH"

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards);

  return backwards.join("");
}

str = "Hi My name is Andrei";
console.log(reverse(str));

function reverse2(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  return str.split("").reverse().join("");
}

console.log(reverse2(str));

const reverse3 = (str) => str.split("").reverse().join("");

console.log(reverse3(str));

const reverse4 = (str) => [...str].reverse().join("");

console.log(reverse4(str));
