// Set a timeout function
const timeoutId = setTimeout(() => {
  console.log('This will not be logged');
}, 3000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);
