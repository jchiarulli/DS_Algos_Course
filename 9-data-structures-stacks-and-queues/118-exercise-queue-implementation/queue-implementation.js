// FIFO
// enqueue, dequeue, peek, isEmpty, lookup

// first to last linked list

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
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // TODO
  // Check input type, number of arguments, etc.
  peek() {
    return this.first;
  }

  // TODO
  // Check input type, number of arguments, etc.
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length) {
      this.last.next = newNode;
      this.last = this.last.next;
    } else {
      this.first = newNode;
      this.last = this.first;
    }

    this.length++;
    return this;
  }

  // TODO
  // Check input type, number of arguments, etc.
  dequeue() {
    if (this.length) {
      this.first = this.first.next;
      if (this.length === 1) {
        this.last = null;
      }
    } else {
      return "Queue is empty";
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

const myQueue = new Queue();

console.log("isEmpty", myQueue.isEmpty());
console.log("peek", myQueue.peek());
console.log("dequeue", myQueue.dequeue());

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

console.log("isEmpty", myQueue.isEmpty());
console.log("peek", myQueue.peek());

console.log("myQueue", myQueue);

console.log("dequeue", myQueue.dequeue());
console.log("dequeue", myQueue.dequeue());
console.log("dequeue", myQueue.dequeue());
console.log("dequeue", myQueue.dequeue());
