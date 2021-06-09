// LIFO
// push, pop, peek, isEmpty, lookup

// top to bottom linked list

// TODO
// Implement a lookup functionality

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    // return holdingPointer;
    return this;
  }

  isEmpty() {
    if (this.length) {
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
