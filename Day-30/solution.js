function throttle(func, delay) {
    let lastCall = 0;
  
    return function (...args) {
      const now = new Date().getTime();
  
      if (now - lastCall >= delay) {
        func(...args);
        lastCall = now;
      }
    };
  }
  
  // Example usage:
  function myFunction() {
    console.log('Function called');
  }
  
  const throttledFunction = throttle(myFunction, 1000); // Throttle with a 1-second interval
  
  // Call the throttled function
  throttledFunction(); // This call will execute the function
  
  // Call the throttled function again within the 1-second interval
  setTimeout(() => {
    throttledFunction(); // This call will be ignored within the interval
  }, 500);
  
  // After 1 second, the next call will execute the function
  setTimeout(() => {
    throttledFunction(); // This call will execute the function
  }, 1000);
  