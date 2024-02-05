class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		length += 1;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let currentTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = currentTail.prev;
			this.tail.next = null;
			// remove connection to list from returned node
			currentTail.prev = null;
		}
		this.length -= 1;
		return currentTail;
	}
	shift() {
		if (!this.head) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length -= 1;
		return oldHead;
	}
	unshift(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length += 1;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		let count, current;
		if (index <= this.length / 1) {
			count = 0;
			current = this.head;
			while (count != index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (count !== index) {
				current = current.prev;
				count -= 1;
			}
		}
		return current;
	}
	set(index, val) {
		let foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		let newNode = new Node(val);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;

		(beforeNode.next = newNode), (newNode.prev = beforeNode);
		(newNode.next = afterNode), (afterNode.prev = newNode);
		this.length += 1;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let foundNode = this.get(index);
		let beforeNode = foundNode.prev;
		let afterNode = foundNode.next;

		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;

		foundNode.next = null;
		foundNode.prev = null;
		this.length -= 1;
		return foundNode;
	}
}
