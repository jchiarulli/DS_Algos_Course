// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// TODO
// convert firstRecurringCharacter() character to
// detect 5 as the first recurring character given
// array = [2,5,5,2,3,5,1,2,4]
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2), space complexity O(1)

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
} // time complexity O(n), space complexity O(n)

// output = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// console.log(output);

output = firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(output);
