class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  lookup(index) {
    // Check input
    // Only return currentNode value when calling
    // outside of insert
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, value) {
    // Cases: < 0, = 0, 1 <= i <= length, i > length, not an int
    if (index === 0) {
      this.prepend(value);
      return this;
    } else if (index === this.length) {
      this.append(value);
      return this;
    } else {
      // let currentNode = this.head;
      // for (let i = 0; i < index - 1; i++) {
      //   currentNode = currentNode.next;
      // }
      const currentNode = this.lookup(index - 1);
      const newNode = new Node(value);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
myLinkedList.insert(5, 3);

console.log(myLinkedList.printList());
console.log(myLinkedList.lookup(5));

// console.log(output);
