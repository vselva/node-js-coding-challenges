const array = [1, 2, 3, 4, 5];

// let reduced = array.reduce((acc, cur) =>  acc + cur, 0);
// console.log(reduced);

Array.prototype.myreduce = function (cb, init) {
    let acc = init;
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }
    return acc;
};

let reduced = array.myreduce((acc, cur) => acc + cur, 0);
console.log(reduced);
