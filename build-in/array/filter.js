const evenNumbers = (arr) => {
    console.log(arr.filter((item) => item % 2 === 0));
}

const oddNumbers = (arr) => {
    console.log(arr.filter((item) => item % 2 !== 0));
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenNumbers(array);
oddNumbers(array);