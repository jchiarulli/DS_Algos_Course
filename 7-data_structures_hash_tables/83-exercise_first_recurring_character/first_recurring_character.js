// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// TODO
// Solve without using JavaScript built-in
// objects & methods
// Improve upon JavaScript es5 & es6 implementations

firstRecurringCharacter1 = function (array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  const object = {};
  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      return array[i];
    }

    object[array[i]] = 1;
  }

  return undefined;
};

firstRecurringCharacter2 = function (array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  const object = {};
  for (let i = 0; i < array.length; i++) {
    if (object.hasOwnProperty(array[i])) {
      return array[i];
    }

    object[array[i]] = true;
  }

  return undefined;
};

array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// array = [2, 3, 4, 5];
// array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// array = [];
// array = 1;
// array = [1];

firstRecurringCharacter1 = firstRecurringCharacter1(array);
firstRecurringCharacter2 = firstRecurringCharacter2(array);

console.log(firstRecurringCharacter1);
console.log(firstRecurringCharacter2);
