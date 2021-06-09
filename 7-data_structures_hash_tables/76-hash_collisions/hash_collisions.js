// creates a user object which places the key-value
// pairs somewhere in memory at different addreses
let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhh!");
  },
};

// access
user.age; // O(1)

// insert
user.spell = "abra kadabra"; // O(1)

console.log(user);

// access with O(1)
user.scream();
