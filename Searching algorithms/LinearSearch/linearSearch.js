/* Write a function that takes in an array and a value and returns the index if it is found
or if it is not found return -1. Do this with linear Search*/

const linearSearch = (arr, val) => {
	if (arr.length === 0) {
		return -1;
	}

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (element === val) {
			return i;
		}
	}

	return -1;
};

console.log(
	linearSearch(["cap", "hat", "feather", "shirt", "pants"], "feather")
); // 2
console.log(linearSearch(["cap", "hat", "feather", "shirt", "pants"], "shoes")); // -1
