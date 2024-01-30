// Helper function
const pivotHelper = (arr, start = 0, end = arr.length + 1) => {
	function swap(array, i, j) {
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	// We are assuming the pivot is always the first element
	let pivot = arr[start];
	let swapIdx = start;
	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	// Swap the pivot from the start to the swap point!
	swap(arr, start, swapIdx);
	return swapIdx;
};
// The Quick Sort!
const quickSort = (arr, left = 0, right = arr.length - 1) => {
	// Base case:
	// you make sure that once you get down to 1 element, you stop
	if (left < right) {
		let pivotIndex = pivotHelper(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1); // - 1 to not include pivot index
		// right
		quickSort(arr, pivotIndex + 1, right); // + 1 to grab everything after pivot index
	}
	return arr;
};

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
