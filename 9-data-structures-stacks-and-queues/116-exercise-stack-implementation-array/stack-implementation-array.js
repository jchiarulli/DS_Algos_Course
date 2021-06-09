// LIFO
// push, pop, peek, isEmpty, lookup

// top to bottom linked list

// TODO
// Check input type, number of arguments, etc.
class Stack {
  constructor() {
    this.top = [];
    this.bottom = [];
  }

  // TODO
  // Check input type, number of arguments, etc.
  peek() {
    if (this.top.length) {
      return this.top[this.top.length - 1];
    } else {
      return this.top;
    }
  }

  // TODO
  // Check input type, number of arguments, etc.
  push(value) {
    if (this.top.length === 0) {
      this.bottom.push(value);
    }

    this.top.push(value);
    return this.top;
  }

  // TODO
  // Check input type, number of arguments, etc.
  pop() {
    if (this.top.length === 1) {
      this.bottom.pop();
    }

    this.top.pop();
    return this.top;
  }

  // TODO
  // Check input type, number of arguments, etc.
  isEmpty() {
    if (this.top.length) {
      return false;
    }

    return true;
  }
}

const stack = new Stack();

console.log("isEmpty", stack.isEmpty());

stack.push("google");
stack.push("Udemy");
stack.push("Discord");

console.log("isEmpty", stack.isEmpty());

console.log(stack);

console.log("peek", stack.peek());

console.log("pop", stack.pop());

console.log("pop", stack.pop());

console.log("pop", stack.pop());

console.log("pop", stack.pop());
