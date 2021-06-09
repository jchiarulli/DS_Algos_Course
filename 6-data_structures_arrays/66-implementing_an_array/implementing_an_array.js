// arrays in JS are objects with integer based keys
// that act like indices

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.lenth--;
    return lastItem;
  }

  delete(index) {
    const lastItem = this.data[index];
    this.shiftItems(index);
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
// console.log(newArray.get(0));
newArray.push("hi");
newArray.push("you");
newArray.push("!");
// newArray.pop();
// newArray.pop();

console.log(newArray.delete(0));
// newArray.push("are");
// newArray.push("nice");
// console.log(newArray);
// newArray.delete(1);