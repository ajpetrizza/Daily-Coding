/* Write a function called minSubArrayLen which accepts two parameters - 
an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which 
the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead. */

const minSubArrayLen = (arr, sum) => {
	// start by having the minimal size of subarray be 0
	let total = 0;
	let start = 0;
	let end = 0;
	let minLen = Infinity;

	while (start < arr.length) {
		console.log("end:", end);
		console.log("start:", start);
		console.log("total:", total);
		// if we dont add up to current sum then slide window to the right
		if (total < sum && end < arr.length) {
			total += arr[end];
			end++;
		}
		// if the current window adds up to at least the sum given then we can shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= arr[start];
			start++;
		} else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3, 7], 7)); // 2
