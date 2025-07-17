//custom find
Array.prototype.myFind = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

const arr = [1, 3, 5, 7, 8, 9, 10];
const firstEven = arr.myFind((el) => el % 2 === 0);
console.log("First Even Number:", firstEven);
