// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [ 0, 3, 4, 4, 6, 30, 31 ]

// Assumptions:
// arrays are both sorted in ascending order
// merging only two arrays

// using const when initializing mergedArray
// means mergedArray can't be modified, i.e.,
// we can't say mergedArray = 2, we can however still
// add and remove elements from it

// TODO
// separate into more functions that are reponsible
// for handling undefined

mergeSortedArrays = (array1, array2) => {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
    console.log("mergedArray", mergedArray);
  }
  return mergedArray;
};

console.log("answer", undefined < 6);
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);