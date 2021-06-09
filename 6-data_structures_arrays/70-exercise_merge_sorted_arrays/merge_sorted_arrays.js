// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [ 0, 3, 4, 4, 6, 30, 31 ]

// Assumptions:
// arrays are both sorted in ascending order
// merging only two arrays

mergeSortedArrays1 = (arr1, arr2) => {
  // check input
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "both arguments must be arrays";
  } else if (arr1.length === 0 && arr2.length !== 0) {
    return arr2;
  } else if (arr2.length === 0 && arr1.length !== 0) {
    return arr1;
  } else if (arr2.length === 0 && arr1.length === 0) {
    return [];
  }

  const mergedArr = [];
  let j = 0;
  let k = 0;

  lengthOfMergedArr = arr1.length + arr2.length;

  for (let i = 0; i < lengthOfMergedArr; i++) {
    if (j === arr1.length) {
      mergedArr.push(arr2[k]);
      k++;
    } else if (k === arr2.length) {
      mergedArr.push(arr1[j]);
      j++;
    } else {
      if (arr1[j] <= arr2[k]) {
        mergedArr.push(arr1[j]);
        j++;
      } else if (arr1[j] > arr2[k]) {
        mergedArr.push(arr2[k]);
        k++;
      }
    }
  }

  return mergedArr;
};

arr2 = [1, 4, 7];
arr1 = [2, 5, 5, 5, 7, 8];

mergedArr = mergeSortedArrays1(arr1, arr2);

console.log(mergedArr);

// TODO
// check arrays contain a certain type, they're sorted in
// increasing order, we have two inputs, & only checks for length

// constant space/in place method

// JS methods

// check difference between adjacent elements in arr1 and between candidate in arr1 and candidate in arr2
