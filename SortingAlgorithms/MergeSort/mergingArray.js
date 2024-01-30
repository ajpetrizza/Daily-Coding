/* First step in a merge sort, and both arrays need to be sorted in the same manner */

const mergingArray = (arr1, arr2) => {
	let results = [];
	// start with pointers at the beginning at each array
	let i = 0;
	let j = 0;
	// have a condition that applies to looping through both at the same time
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			// if item in array 1 is smaller push it to the results
			results.push(arr1[i]);
			// now move the index of i up by one
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	// if you reach the end of one array, you need to add the rest of that array to the results
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	// same thing for second array
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
};

console.log(mergingArray([1, 10, 50], [2, 14, 99, 100]));
