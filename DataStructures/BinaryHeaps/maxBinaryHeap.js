class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(val) {
		this.values.push(val);
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if (element <= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
		return this;
	}
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(33);
console.log(maxHeap.insert(55));
