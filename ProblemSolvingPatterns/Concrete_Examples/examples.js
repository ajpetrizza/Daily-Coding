// function charCount(str) {
// 	//make object to return at end
// 	let result = {};
// 	//loop over string, for each character...
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i].toLowerCase();
// 		//if the char is a number/letter AND is a key in object, add one to count
// 		if (result[char] > 0) {
// 			result[char]++;
// 		}
// 		//if the char is a number/letter AND not in our object, add it and set value to 1
// 		else {
// 			result[char] = 1;
// 		}
// 	}
// 	//if character is something else (space, period, etc.) dont do anything
// 	//return object at end
// 	return result;
// }

// function charCount(str) {
// 	let result = {};
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i].toLowerCase();
// 		if (/[a-z0-9]/.test(char)) {
// 			if (result[char] > 0) {
// 				result[char]++;
// 			} else {
// 				result[char] = 1;
// 			}
// 		}
// 	}
// 	return result;
// }

// Even better....
function charCount(str) {
	let result = {};
	for (let char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			result[char] = ++result[char] || 1;
		}
	}
	return result;
}

console.log(charCount("always"));
console.log(charCount("Hello"));
console.log(charCount("Hi there!"));
