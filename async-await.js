// async await is an asynchronous function
// which is just a normal function with a `async` before it

async function countOdd() {
	try {
		const lines = await readFileAsArray("./numbers");
		const numbers = lines.map(Number);
		const oddCount = numbers.filter(number => number % 2 === 1).length;

		console.log("odd number count", oddCount);
	} catch (err) {
		console.log(err);
	}
}

countOdd();