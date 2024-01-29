/* Write a function that takes a string and a substring value and returns 
the count on how many instances of that substring are found within the longer string */

const naiveStringSearch = (str, subStr) => {
	let matches = 0;
	if (str.length === 0 || subStr.length === 0) {
		return matches;
	}

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < subStr.length; j++) {
			const strLetter = str[i + j];
			const subLetter = subStr[j];
			if (strLetter !== subLetter) {
				break;
			}
			if (j === subStr.length - 1) {
				matches += 1;
			}
		}
	}

	return matches;
};

console.log(naiveStringSearch("hello There", "ell")); // 1
console.log(naiveStringSearch("zwowomgzomg", "omg")); // 2
