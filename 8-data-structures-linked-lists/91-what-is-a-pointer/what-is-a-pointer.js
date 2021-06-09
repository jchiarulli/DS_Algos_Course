const basket = ["apples", "grapes", "pears"];

// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//          8742 --> pears
//                    372 --> null

let obj1 = { a: true };
// creates a pointer, i.e., a reference
// Here the obj1 is not being copied and placed
// in the variable called obj2
// Instead a pointer is created which points to
// the same object being stored in the heap
// So, when the value of a property in obj1
// changes it also changes in obj2
// Here, we aren't creating two places in memory
// that both have the key-value pair of a: true,
// so the RAM simply has one key-value-pair of
// a: true and there are pointers from obj1 and
// obj2 to the same place in the RAM
let obj2 = obj1;

console.log("obj1", obj1);
console.log("obj2", obj2);

obj1.a = false;
// delete obj1.a;
obj1 = null;
// Since JavaScript is garbage collected assigning
// obj2 to the string hello removes a: true from
// memory since nothing is pointing to it after
// the assignment to the string hello assuming
// obj1 is deleted or set to null
// In a language that doesn't have garbage
// collection you would have to manually delete
// a: true when nothing points to it
// If the value is not deleted this can cause
// a useful resource like memory to contain
// data that is not being used anymore
// The benefit of languages without garbage
// collection is they can be optimized
obj2 = "hello";
console.log("obj1", obj1);
console.log("obj2", obj2);
