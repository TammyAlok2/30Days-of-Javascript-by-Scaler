function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// Example usage:
const startValue = 1;
const endValue = 5;

const generator = rangeGenerator(startValue, endValue);

// Iterate through the generated range of numbers
for (const number of generator) {
    console.log(number);
}
