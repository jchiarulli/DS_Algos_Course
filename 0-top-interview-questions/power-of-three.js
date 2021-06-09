// TODO
// Improve solutions
// 326. Power of Three
// Given an integer, write a function to determine
// if it is a power of three.

var isPowerOfThree1 = function (n) {
  if (n <= 0) {
    return false;
  } else if (n === 1) {
    return true;
  }

  while (n > 1) {
    if (n === 3) {
      return true;
    } else if (n % 3 !== 0) {
      return false;
    }
    n = n / 3;
  }
};

n = 3;
console.log(isPowerOfThree1(n));

var isPowerOfThree2 = function (n) {
  if (n < 1) {
    return false;
  }

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
};

n = 3;
console.log(isPowerOfThree2(n));
