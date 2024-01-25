/* Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair 
equals the target average. There may be more than one pair that matches the average target. */

const averagePair = (arr, average) => {
	let firstVal = 0;
	let finalVal = arr.length - 1;

	while (finalVal > firstVal) {
		if ((arr[firstVal] + arr[finalVal]) / 2 === average) {
			return true;
		}
		finalVal -= 1;
		if (finalVal === firstVal) {
			firstVal += 1;
			finalVal = arr.length - 1;
		}
	}
	return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
