let count = 0;
let intervalId;

const timer = () => {
    intervalId = setInterval((a, b) => {
        console.log('count, args:', count++, a, b);
    }, 1000, 'arg1', 'arg2');
};

timer();

setTimeout(() => {
    console.log('Stopping the interval after 5 seconds');
    clearInterval(intervalId);
}, 5000); // Stop the interval after 5 seconds
