// JavaScript code for every() method
function isEven(element, index, array) {
	return element % 2 == 0;
}
function func() {
	let arr = [56, 92, 18, 88, 12];

	// Check for even number
	let value = arr.every(isEven);
	console.log(value);
}
func();
