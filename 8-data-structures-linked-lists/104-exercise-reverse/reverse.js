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
    // TODO
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
    // TODO
    // Cases: < 0, = 0, 1 <= i <= length, i > length, not an int
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
    } else {
      const currentNode = this.lookup(index - 1);
      const newNode = new Node(value);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
    return this;
  }

  delete(index) {
    // TODO
    // Cases: < 0, = 0, 1 <= i < length, i >= length, not an int
    // If linked list is empty
    // How to handle index === 0 if linked list
    // has only one element
    // Create separate methods for index === 0 &
    // index === this.length-1?

    if (index === 0) {
      this.head = this.head.next;
      console.log("this.head", this.head);
    } else {
      const currentNode = this.lookup(index - 1);
      const unwantedNode = currentNode.next;
      currentNode.next = unwantedNode.next;

      if (index === this.length - 1) {
        this.tail = currentNode;
      }
      console.log("this.tail", this.tail);
    }
    this.length--;
    return this;
  }

  reverse() {
    if (this.length <= 1) {
      return this;
    }
    let temp = this.head;
    this.head = {
      value: temp.value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;

    temp = temp.next;

    while (temp !== null) {
      this.prepend(temp.value);
      temp = temp.next;
    }
    return this;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);

console.log(myLinkedList.printList());
myLinkedList.insert(5, 3);

console.log(myLinkedList.printList());
// console.log(myLinkedList.lookup(5));

myLinkedList.delete(0);
console.log(myLinkedList.printList());
console.log(myLinkedList);
// myLinkedList.append(4);
// console.log(myLinkedList.printList());

// myLinkedList.prepend(7);
// console.log(myLinkedList.printList());
myLinkedList.reverse();

function printList(singlyList) {
  var nodes = [];
  var nexts = [];
  for (var n = singlyList.head; n != null; n = n.next) {
    nodes.push(n.value);
    nexts.push(n.prev);
    console.log("n", n);
  }
  console.log(nodes.join(" <=> "));
}

printList(myLinkedList);
