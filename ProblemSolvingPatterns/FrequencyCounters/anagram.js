/*
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
formed from iceman.
*/

const isAnagram = (str1, str2) => {
	// check if the strings are the same length, if not; short circuit
	if (str1.length !== str2.length) {
		return false;
	}
	// create a counter for our values
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	// get a count for each value we have in our string and their occurances
	// if that value exists add to it, if it doesnt create it and set to 1;
	for (let char of str1) {
		frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
	}
	// repeat for second string
	for (let char of str2) {
		frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
	}
	// now compare those keys and see if they are equal
	for (let key in frequencyCounter1) {
		// if our key is not found in the other counter return false
		if (!(key in frequencyCounter2)) {
			return false;
		}
		// now check if the frequency is equal
		if (frequencyCounter1[key] !== frequencyCounter2[key]) {
			return false;
		}
	}
	// if all else passed, return true;
	return true;
};

console.log(isAnagram("hello", "ohell"));
console.log(isAnagram("cinema", "iceman"));
// Should fail:
console.log(isAnagram("baseball", "asebbaal"));
console.log(isAnagram("hello", "ohe"));
