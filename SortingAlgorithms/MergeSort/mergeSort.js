// Helper Function!!
const mergingArray = (arr1, arr2) => {
	let results = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
};
// Sort!
const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	// find a mid point!
	let mid = Math.floor(arr.length / 2);
	// set up your left by slicing up to that
	// mid point and calling your sort on this array
	let left = mergeSort(arr.slice(0, mid));
	// repeat for the right side of the array
	let right = mergeSort(arr.slice(mid));

	// now we need to MERGE them back together at the end with our final two sorted arrays
	return mergingArray(left, right);
};

console.log(mergeSort([10, 24, 76, 73, 1, 9]));
