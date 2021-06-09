// Stacks

// Go to google then udemy.com then youtube

// Stack will look like this:
// youtube
// udemy.com
// youtube

// Can build a stack with an array or a linked list

// Why would we want to build a stack with an array
// or a linked list?

// Stacks are LIFO - Last In Last Out, so if we
// use an array we can push, pop, and peek the last
// value in the stack in O(1) time, and we can
// perform a lookup in O(n) time.
// If we use a linked list we can still push, pop,
// and peek the last value in the stack in O(1) time
// if we have a reference to the tail of the linked
// list, and we can perform a lookup in O(n) time.

// Queues

// Matt -- Joy -- Samir -- Pavel

// Why would we want to build a queue with a linked
// list as ooposed to an array?

// Queues are FIFO - First In First Out, so if we
// use a linked list we can perform enqueue, dequeue,
// and peek the first value in the linked list in O(1)
// time if we have a reference to the head of the
// linked list, and we can perform a lookup in O(n)
// time.
// If we used an array then the enqueue and dequeue
// operations would take O(n) time since we would have
// to shift all of the elements in the array after
// removing or adding an element to the first position
// in the array.
