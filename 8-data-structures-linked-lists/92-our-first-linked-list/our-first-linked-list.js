// 10 --> 5 --> 16

// A node can be thought of as a bucket of data
// Here the head is a node which is a container
// around the data
// In a linked list all the node needs to
// have is a value property and a next property
// which is a pointer to  the next node in the
// list
// The value property can be anything and the next
// property must be a pointer or a reference to
// the next node in the list which is another
// object that we reference in memory
// This way the values can change and the pointers
// will still point to the the next node in the
// list which will contain any updated value
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

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
    // this.tail.next gets assigned to
    // { value: value, next: null } first
    // then this.tail gets assigned this.tail.next
    this.tail = this.tail.next = { value: value, next: null };
    this.length++;

    return this;
  }

  prepend(value) {
    this.head = { value: value, next: this.head };
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);

output = myLinkedList.prepend(1);

console.log(output);

// console.log(myLinkedList.head);
// console.log(myLinkedList.head.next);
// console.log(myLinkedList.head.next.next);
