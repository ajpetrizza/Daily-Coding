/* Write a function called isSubsequence which takes in two strings and checks 
whether the characters in the first string form a subsequence of the characters 
in the second string. In other words, the function should check whether the 
characters in the first string appear somewhere in the second string, 
without their order changing. */

const isSubsequence = (subStr, str) => {
	//check if the actual string is shorter and if so return false
	if (str.length < subStr.length) {
		return false;
	}
	// if no substring also escape
	if (!subStr) return true;
	// pointers to keep count
	let i = 0;
	let j = 0;
	// loop and make sure that we do not go past our length of string
	while (j < str.length) {
		if (str[j] === subStr[i]) i++;
		if (i === subStr.length) return true;
		j++;
	}
	return false;
};

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
