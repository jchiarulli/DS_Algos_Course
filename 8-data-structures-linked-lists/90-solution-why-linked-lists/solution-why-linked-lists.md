# Why Linked List

- Have a loose structure which allows you to insert a value into the middle of the list by resetting a few pointers
- Same for deleting a node
- Main difference between an array and a linked list is the elements in an array are indexed, so we can easily go to index 5 in an array
  and retrieve the value
- In a linked list you start at the head and traverse the list until you get to item 5 which has a time complexity of O(n)
- Similar to iterating an array, but it's called traversal since you don't necessairly know when a linked list will end
- Start from the head and you keep going until you hit null
- Another advantage arrays can have is most computers have caching systems that makes reading from sequential memory faster than reading scattered addresses
- Array items are located right next to each other in memory unlike linked lists which have their values scattered all over in the memory similar to hash tables
- So, traversing a linked list is slower than iterating through an array even though they're both O(n)
- However, the inserts in the middle of a linked list tend to be faster than an array
- When data is inserted into a linked list there is no need to shift the items since it's just scattered in memory when inserted
- When deleting an item from a linked list there is also no need to shift the items since again the items are scatterd to begin with
- Unlike hash tables the items in a linked list have pointers to the next item in the list, so the items can be sorted and have an order

## Big-Oh for Linked List

- prepend - O(1)
- append - O(1)
- lookup/traversal - O(n)
- insert - O(n)
- delete - O(n)

- Insert and delete are O(n) since we may have to traverse the whole list when inserting or deleting, but we don't have to shift the items
- We just need to reassign a pointer from the previous item in the list to the address of the new item, and then place a pointer from the newly added item to the next item in the list
