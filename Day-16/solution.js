function sumArray(array) {
    const sum = array.reduce((total, item) => total + item); 
    console.log(sum); 
    return sum;
  }
  
  sumArray([1, 4, 0, 9, -3]);