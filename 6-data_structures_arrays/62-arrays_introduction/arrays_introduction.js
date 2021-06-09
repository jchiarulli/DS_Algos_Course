const strings = ["a", "b", "c", "d"];
// if we're on a 32-bit system, i.e., we have 4
// shelves to store the letter "a" in 0's and 1's,
// then we're using up 4*4 = 16 bytes of storage.

// go to the array called strings and grab the 3rd item from where the array is stored in the memory
console.log(strings[2]);

// push
strings.push("e"); // O(1) since not looping and computer knows where the last item is stored

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // add x to the beginning of the array

// splice
strings.splice(2, 0, "alien"); // O(n/2) -> O(n)

console.log(strings);
