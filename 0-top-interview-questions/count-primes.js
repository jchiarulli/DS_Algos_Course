// 204. Count Primes
// Count the number of prime numbers less than a
// non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less
// than 10, they are 2, 3, 5, 7.

var checkPrime = function (n) {
  if (n === 2 || n === 3) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i < n; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

var countPrimes = function (n) {
  let primes = 0;
  for (let i = n - 1; i >= 2; i--) {
    if (checkPrime(i)) {
      primes++;
    }
  }

  return primes;
};

let n = 10;
console.log(countPrimes(n));
