/* This is a helper function for Quick sort. This is the pivot or the partition */

const pivotHelper = (arr, start = 0, end = arr.length + 1) => {
	// swap helper function
	function swap(array, i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	let pivot = arr[start];
	// this will be the index that we return at the end
	let swapIdx = start;
	// loop over every item in array, but no reason to look at self
	for (let i = start + 1; i < arr.length; i++) {
		// compare our pivot to the element in array
		if (pivot > arr[i]) {
			// its less than our pivot, increment our swap index
			swapIdx++;
			// swap that element with the one before it
			swap(arr, swapIdx, i);
		}
	}
	// now that we have looped through the array
	// swap our starting element with the swap Index!!
	swap(arr, start, swapIdx);
	// now return our swap index which our quick sort will take advantage of!
	return swapIdx;
};

console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]));
