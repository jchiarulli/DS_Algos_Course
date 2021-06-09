// FIFO
// enqueue, dequeue, peek, isEmpty, lookup

// first to last linked list

// TODO
// Implement a lookup functionality

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    // const holdingPointer = this.first;

    this.first = this.first.next;
    this.length--;
    return this;

    // return holdingPointer;
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
// console.log("dequeue", myQueue.dequeue());

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
console.log("dequeue", myQueue.dequeue());
