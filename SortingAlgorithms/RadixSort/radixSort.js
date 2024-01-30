const getDigit = (num, i) => {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
};
// The Radix Sort
const radixSort = (nums) => {
	// find number with most digits
	let maxDigitCount = mostDigits(nums);
	// loop with longest digits
	for (let k = 0; k < maxDigitCount; k++) {
		// create a collection of arrays 0-9 indexed for buckets
		let digitBuckets = Array.from({ length: 10 }, () => []);
		// loop through array elements get that digit at place
		for (let i = 0; i < nums.length; i++) {
			// grab the digit at place K
			let digit = getDigit(nums[i], k);
			// add it to the index of buckets
			digitBuckets[digit].push(nums[i]);
		}
		// combine the arrays together
		nums = [].concat(...digitBuckets);
	}
	return nums;
};

console.log(radixSort([23, 345, 5467, 99, 87555]));
