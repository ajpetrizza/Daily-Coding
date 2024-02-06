class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.last = null;
		this.first = null;
		this.size = 0;
	}
	// LIFO - Last in First out!
	// so we work from the top of the linked list to give us Constant time O(1)
	push(val) {
		let newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.last;
			this.last = newNode;
			this.last.next = temp;
		}
		return ++this.size;
	}
	// Top item comes off first! - LIFO
	pop() {
		if (this.size === 0) return undefined;
		let temp = this.last;
		if (this.first === this.last) {
			this.first = null;
		}
		this.last = this.last.next;
		this.size -= 1;
		return temp.val;
	}
}

let stack = new Stack();
stack.push("first");
stack.push("second");
stack.push("third");
console.log(stack);
stack.pop();
console.log(stack);
