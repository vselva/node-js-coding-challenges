const sum = (arr) => {
    console.log(arr.reduce((a, b) => a + b, 0));
}

const mul = (arr) => {
    console.log(arr.reduce((a, b) => a * b, 1))
}

const arr = [1, 2, 3, 4, 5];
sum(arr);
mul(arr);
