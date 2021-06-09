// TODO
// Check input
// Make

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Denotes that this should be a private method,
  // but you can actually still access it
  // Can use closures, weak maps, or symbols to
  // make this a private method
  // TypeScript allows us to create private properties
  // and methods
  // Considered to be O(1) with an actual hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      // console.log(hash);
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const currentBucket = this.data[this._hash(key)];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }
}

const myHashTable = new HashTable(50);

// generates a random hash number from 0 to 50
console.log(myHashTable._hash("grapes"));
console.log(myHashTable._hash("grapess"));
console.log(myHashTable._hash("grapesssss"));

console.log(myHashTable.set("grapess", 10000));
console.log(myHashTable.set("grapes", 100));
console.log(myHashTable.set("grapesssss", 1));

data = myHashTable.get("grapesssss");
// data = myHashTable.get("hats"); // undefined

console.log(data);

// myHashTable.set("apples", 9);
// myHashTable.get("apples");
