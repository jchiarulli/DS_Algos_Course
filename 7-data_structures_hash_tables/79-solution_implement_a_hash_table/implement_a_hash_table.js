// TODO
// Be able to access collision keys in keys method
// Grab all of the values, i.e., create a values method

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
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

  // Cons
  // Loop through entire memory space to get all of the keys even if
  // memory space isn't full
  // With arrays we would have only had to loop over three elements
  // So, if we're using this type of method hash tables may not be the
  // best idea
  // Can use for in loops in JavaScript to loop over object keys, but
  // it's still slow
  // Also, there's no guaranteed order when looping over hash table keys
  // since the keys are being placed in random addresses in the memory
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(3);

myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
myHashTable.get("apples");

console.log(myHashTable.keys());
