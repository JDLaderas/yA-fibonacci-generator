let numbers = [];

function fibonacciGenerator(n) {
	if (n <= 1) {
		numbers = [0];
	} else if (n === 2) {
		numbers = [0, 1];
	} else {
		numbers = [0, 1];
		for (let i = 2; i < n; i++) {
			numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
		}
	}

	return numbers;
}
