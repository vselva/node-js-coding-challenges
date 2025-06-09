const squareEachElement = (arr) => {
    console.log( arr.map((item) => item * item));
}

const array = [1, 2, 3, 4, 5];
squareEachElement(array);

const users = [
    { name: 'Selva' },
    { name: 'Diana' },
    { name: 'Naru' }
];

const userNames = users.map(u => u.name); // declarative programming 
console.log(userNames);