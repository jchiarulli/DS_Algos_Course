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
    // this.tail = this.tail.next = { value: value, next: null };

    const newNode = {
      value: value,
      next: null,
    };

    // Attaches the newNode to the last item in
    // the linked list
    // Grabs the pointer of the tail and instead
    // of pointing it to null we instead point
    // it to the new node we just created
    this.tail.next = newNode;

    // Updates the tail of the linked list to be
    // the new node we just created
    // Since we're running this after the above
    // assignment the this.tail.next we'll be
    // equal to the newNode
    this.tail = newNode;

    // Increments the length of the linked list
    this.length++;

    // returns the LinkedList object
    return this;
  }
}

const myLinkedList = new LinkedList(10);

output = myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);

console.log(output);
