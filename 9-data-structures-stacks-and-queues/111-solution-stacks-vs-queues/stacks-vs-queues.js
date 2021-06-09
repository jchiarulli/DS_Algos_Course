// Stacks

// Go to google then udemy.com then youtube

// Stack will look like this:
// youtube
// udemy.com
// youtube

// Why would we want to build a stack with an array
// or a linked list?

// In this case either an array or a linked list
// can be used to implement a stack efficiently.
// Since the operations push, pop, and peek can
// all be done in O(1) time, and lookup can be
// done in O(n) time.
// However, arrays implement cache locality, i.e.,
// the values in an array are stored next to each
// other in memory, so technically an array is
// faster than a linked list which its values
// scattered in memory.
// Also, linked lists use more memory than an arrays
// since they have to store pointers as well as the
// values.
// But linked lists have more dynamic memory, so
// we can keep adding elements to a linked list
// without having to double the amount of available
// memory once it becomes too large for the allocated
// memory like an array does since its allocated
// memory as needed.
// Also, you could consider the difficulty in
// implementing a linked list vs an array

// Queues

// Matt -- Joy -- Samir -- Pavel

// Why would we want to build a queue with a linked
// list as ooposed to an array?

// Would never want to implement a queue with an
// array. Would always want to use a linked list.
// Arrays have indices associated with each value
// so if we attempt to remove the first value in
// the value using a dequeue operation then we
// would need to unshift all of the indices
// which takes O(n) time. Whereas, a linked list
// has can have a pointer to the head and tail,
// so all we would need to do to perform a dequeue
// operation is to set the head to be the next element
// in the linked list which is O(1).
