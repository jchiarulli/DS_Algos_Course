// C++
// int a[20];
// int b[5] { 1, 2, 3, 4, 5 };
// In JS & Python we don't have to allocate memory for arrays
// Python uses lists and JS uses array lists
// These work like dynamic arrays they automatically
// allocate memory

// Dynamic arrays seem better since we don't have to
// worry about memory becauase of automatic resizing
// Gets into a discussion of memory management which
// low-level languages like C++ allow whereas higher-level
// languages like JS don't

// Dynamic array expands as we add more elements

// if JS creates an array with 4 blocks of memory and then we
// add another element under the hood because
// this is a dynamic array we loop over the array
// copy it, and move it to a new location with
// 8 blocks of memory, so we can keep adding on to it
// Means operation is O(n)
const strings = ["a", "b", "c", "d"];

// push
strings.push("e"); // is usually O(1), but there is a possibility that we need to copy the array, which is O(n)
