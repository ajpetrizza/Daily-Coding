/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
*/

const sameFrequency = (num1, num2) => {
	let str1 = num1.toString();
	let str2 = num2.toString();
	if (str1.length !== str2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	// if value does not exist on obj create it and set to one or add 1;
	for (let val of str1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	// same thing for the next counter
	for (let val of str2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	// now check if keys are the same on each obj, if not return false;
	for (let key in frequencyCounter1) {
		if (!(key in frequencyCounter2)) {
			return false;
		}
		// if we have made it this far, check if the count is the same (if not return false)
		if (frequencyCounter2[key] !== frequencyCounter1[key]) {
			return false;
		}
	}
	// If logic has reached here we can return true on keys being same and count being equal
	return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 147)); // false
console.log(sameFrequency(3589578, 5879385)); // true
