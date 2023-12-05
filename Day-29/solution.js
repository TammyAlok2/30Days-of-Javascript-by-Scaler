function raceWithTimeout(promises, timeout) {
    // Create a promise that rejects after a specified timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Timeout exceeded'));
      }, timeout);
    });
  
    // Use Promise.race to resolve with the first promise that resolves
    return Promise.race([...promises, timeoutPromise]);
  }
  
  // Example usage:
  const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 500));
  const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 1000));
  
  raceWithTimeout([promise1, promise2], 800)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
  