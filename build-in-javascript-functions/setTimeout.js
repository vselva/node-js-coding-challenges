// Set a timeout function
const timeoutId = setTimeout(() => {
  console.log('This will not be logged');
}, 3000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);

const setTimeoutFn = (arg1, arg2) => {
  console.log(arg1, arg2);
  setTimeout((a1, a2) => {
    console.log('delayed function executed with args:', a1, a2);
  }, 1000, arg1, arg2); // Pass arguments to the delayed function
};

setTimeoutFn('arg1', 'arg2'); // This will log after 1 second
setTimeoutFn('arg3', 'arg4'); // This will log after 2 seconds

