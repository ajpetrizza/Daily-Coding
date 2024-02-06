let stack = [];

// we use push to add something into the array
// this element/item will be at the BOTTOM
stack.push("First in");
// add a few more items
stack.push("Second in");
stack.push("Last in");
// stack = ['First in', 'Second in', 'Last in']

// if we want to remove something from the stack
// we use POP because it needs to come from the 'TOP'
stack.pop(); // 'Last in' Last in first out
stack.pop(); // 'Second in'
// Last item in our stack
// LIFO - OR - FILO First in last out
stack.pop(); // 'First in'

// stack = [];
