// LIFO
// push, pop, peek, isEmpty, lookup

// top to bottom linked list

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    if (this.array.length) {
      return this.array[this.array.length - 1];
    }

    return this.array;
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }

  isEmpty() {
    if (this.array.length) {
      return false;
    }

    return true;
  }
}

const myStack = new Stack();

console.log("isEmpty", myStack.isEmpty());
console.log("peek", myStack.peek());

console.log("push", myStack.push("google"));
console.log("push", myStack.push("udemy"));
console.log("push", myStack.push("discord"));

console.log("isEmpty", myStack.isEmpty());
console.log("peek", myStack.peek());

console.log("pop", myStack.pop());
console.log("pop", myStack.pop());
console.log("pop", myStack.pop());
console.log("pop", myStack.pop());
