// gets the digit value at i from base 10
// 0 being the 1's place, 2 being the 10's etc...
const getDigit = (num, i) => {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
console.log(getDigit(7233, 0)); // 3

// gets the count of digits in the number
// basically the length of it in a string etc...
const digitCount = (num) => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};
console.log(digitCount(7233)); // 4

// gives you the number of digits in the largest numbers of an array
const mostDigits = (nums) => {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
};
console.log(mostDigits([1, 55, 234, 7867])); // 4
