let queue = [];

queue.push("First");
queue.push("Second");
queue.push("Third");

// queue = ['First', 'Second', 'Third']

// Following rules of the Queue we need to use FIFO
// So you would have to use Shift()
queue.shift(); // 'First'
queue.shift(); // 'Second'
queue.shift(); // 'Third'

// queue = [];
