
const fibonacci = (index) => {
    if (index === 0) return 0;
    if (index === 1) return 1;

    let f = [ 0, 1 ];
    for (let i = 2; i <= index; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[index];
}
const fib = fibonacci(10);
console.log('Fibonaaci with a loop:', fib);

const recursiveFibonacci = (index) => {
    if (index == 0) return 0;
    if (index == 1) return 1;

    return recursiveFibonacci(index - 1) + recursiveFibonacci (index - 2)
}
const rFib = recursiveFibonacci(10);
console.log('Fibonaaci with a recursive function:', rFib);