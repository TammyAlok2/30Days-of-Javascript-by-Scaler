/*question -1) Write a JavaScript function that reverses a number.
Sample Data and output:
Example: 
x = 32243;
Expected Output: 34223 
*/

//first way using recursion 
function reverseFunction(num, reversed = 0) { 
    if (num === 0) { 
        return reversed; 
    } 
    return reverseFunction(Math.floor(num / 10), 
        reversed * 10 + num % 10); 
}

const num = 987;
const result = reverseFunction(num);
console.log(result);

//second way using string iteration 
/*
function reverseFunction(num) { 
    let digits = Array.from(String(num), Number); 
    let reversedArray = digits.reduce((acc, digit) => 
        [digit, ...acc], []); 
    return parseInt(reversedArray.join('')); 
} 
  
let num = 123456789; 
let reversedNum = reverseFunction(num); 
  
console.log(reversedNum);
*/