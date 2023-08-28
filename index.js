/*
    -Define a function called bubbleSort that takes an array
    -Start looping with a variable called i at the end of the array towards the beginning
    -Start an inner loop with a variable called j from the beginning until i-1
    -If arr[j] is greater than arr[j+1], swap those two values
    -Return the sorted array
*/

//my solution O(N^2)
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap indices
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Optimize with no swaps  O(N) where data is sorted or nearly sorted
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    console.log("ONE ROUND");
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap indices
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([29, 10, 14, 30, 37, 14, 19]));
console.log(bubbleSort([70, 2, 89, 5, 1, 8, 63, 11]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6]));
