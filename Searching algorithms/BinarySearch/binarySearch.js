/* Write a function called binarySearch which accepts a sorted array 
and a value and returns the index at which the value exists. Otherwise, return -1. */

const binarySearch = (arr, val) => {
	let left = 0;
	let right = arr.length - 1;
	let middle = Math.floor((right + left) / 2);

	while (arr[middle] !== val && left <= right) {
		if (val > arr[middle]) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
		middle = Math.floor((right + left) / 2);
	}
	// now check if the element matches and return, if not return -1
	if (arr[middle] === val) {
		console.log(middle);
		return middle;
	}
	console.log(-1);
	return -1;
};

binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
binarySearch(
	[
		5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
		99,
	],
	10
); // 2
