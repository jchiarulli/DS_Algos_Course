var bubbleSort = function (input) {
  if (input.length < 2) {
    return input;
  } else {
    for (let i = 0; i < input.length - i; i++) {
      if (input[i] > input[j]) {
        temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
      j++;
    }
  }
};

input = [3, 2, 4, 8, 7, 9, 10];
console.log(bubbleSort(input));
