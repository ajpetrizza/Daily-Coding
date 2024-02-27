/* Fibonacci Sequence - Recursion */
// function fib(n) {
// 	if (n <= 2) return 1;
// 	return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(6)); // 3

// Memoization!!

// function fib(n, memo = [undefined, 1, 1]) {
// 	if (memo[n]) return memo[n];
// 	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// 	return memo[n];
// }

// Tabulated
function fib(n, memo = [undefined, 1, 1]) {
	for (let i = 3; i <= n; i++) {
		memo[i] = memo[i - 1] + memo[i - 2];
	}
	return memo[n];
}

console.log(fib(6)); // 8
console.log(fib(12)); // 144
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
