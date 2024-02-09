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
	extractMax() {
		// swap first and last
		let max = this.values[0];
		let end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			// SINK DOWN
			this.sinkDown();
		}
		return max;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIndex = 2 * idx + 1;
			let rightChildIndex = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;
			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if (leftChild > element) {
					swap = leftChildIndex;
				}
			}
			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIndex;
				}
			}
			if (swap === null) break;
			// if swap has a value, now swap those values
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			// now swap the index with the index of the element you swapped with
			idx = swap;
		}
	}
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
