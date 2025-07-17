let array = [18, 20, 9, 5, 36, 54, 75, 0];

// let filtered = array.filter(el => el > 18);
// console.log(filtered);

Array.prototype.myfilter = function (cb) {
    let filtered = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};

let filtered = array.myfilter((el) => el >= 18);
console.log(filtered);
