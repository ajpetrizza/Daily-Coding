// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has its corresponding value
// squared in the second array. The frequency of values must be the same.
const same = (arr1, arr2) => {
	//first check if they are the same size
	if (arr1.length !== arr2.length) {
		return false;
	}
	// create a frequency counter object for each array
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	// loop through the arrays and get a count on each value inside
	for (let val of arr1) {
		// if the value does not exist on our object, create it, IF it does, increment by 1
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		// same check here
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	// loop through keys and check if they are also present in second obj
	for (let key in frequencyCounter1) {
		//are those keys on the second counter?
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		// check if they are there in the same frequency
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	// if all passed, return true
	return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
