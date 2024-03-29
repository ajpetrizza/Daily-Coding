//simplistic hash function
// function hash(key, arrayLength) {
// 	let total = 0;
// 	for (let char of key) {
// 		let value = char.charCodeAt(0) - 96;
// 		total = (total + value) % arrayLength;
// 	}
// 	return total;
// }
class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}
	hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	set(key, value) {
		let index = this.hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
		return this.keyMap;
	}
	get(key) {
		let index = this.hash(key);
		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}
		return undefined;
	}
	values() {
		let values = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!values.includes(this.keyMap[i][j][1])) {
						values.push(this.keyMap[i][j][1]);
					}
				}
			}
		}
		return values;
	}
	keys() {
		let keys = [];
		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!values.includes(this.keyMap[i][j][0])) {
						keys.push(this.keyMap[i][j][0]);
					}
				}
			}
		}
		return keys;
	}
}

let ht = new HashTable();
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
console.log(ht.get("yellow"));
// log my current hash table
console.log(ht.keyMap);
