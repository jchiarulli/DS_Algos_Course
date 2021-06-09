// LIFO
// push, pop, peek, isEmpty, lookup

// top to bottom linked list

// TODO
// Implement a lookup functionality

// TODO
// Check input type, number of arguments, etc.
class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

// TODO
// Check input type, number of arguments, etc.
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // TODO
  // Check input type, number of arguments, etc.
  peek() {
    return this.top;
  }

  // TODO
  // Check input type, number of arguments, etc.
  push(value) {
    const newNode = new Node(value);
    if (this.length) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      this.top = newNode;
      this.bottom = newNode;
    }

    this.length++;
    return this;
  }

  // TODO
  // Check input type, number of arguments, etc.
  pop() {
    if (this.length) {
      this.top = this.top.next;
      if (this.length === 1) {
        this.bottom = null;
      }
    } else {
      return "Stack is empty";
    }

    this.length--;
    return this;
  }

  // TODO
  // Check input type, number of arguments, etc.
  isEmpty() {
    if (this.length) {
      return false;
    }

    return true;
  }
}

const stack = new Stack();

console.log("isEmpty", stack.isEmpty());
console.log("peek", stack.peek());
console.log("pop", stack.pop());

stack.push("google");
stack.push("Udemy");
stack.push("Discord");

console.log("isEmpty", stack.isEmpty());

console.log("Stack", stack);

console.log("peek", stack.peek());

console.log("pop", stack.pop());

console.log("pop", stack.pop());

console.log("pop", stack.pop());

console.log("pop", stack.pop());
