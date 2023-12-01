function calculateTotal(numbers) {
    // Filter out even numbers
    const filteredNumbers = numbers.filter(num => num % 2 !== 0);
  
    // Square the remaining numbers
    const squaredNumbers = filteredNumbers.map(num => num * num);
  
    // Calculate the sum of squared numbers
    const total = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
  
    return total;
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = calculateTotal(numbersArray);
  console.log(result); // Output: 165
  