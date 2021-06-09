// Hash tables are implemented differently
// in different languages, but most of the time
// the key and the value can be any type of data
// structure
// So, we can for example have a key as a function
// and a value as a function
// In JavaScript if you use a number or a function
// as a key in an object it actually gets converted
// to a string
// With es6 we now have access to maps and sets in
// JavaScript

let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhh!");
  },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

// Difference between a map and an object is a
// map allows you to save any data type as the key
// Another benefit of maps is they retain insertion
// order as opposed to an object where the data
// is inserted randomly in a designated block of memory
// Maps give you some order
const a = new Map();

// Sets are similar to map the only difference is
// they only store the keys
// Sets don't allow duplicate keys
const b = new Sets();
