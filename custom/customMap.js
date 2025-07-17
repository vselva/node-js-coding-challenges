const array = [1, 2, 3, 4];

// in build map
let mapped = array.map((elem, index, array) => elem * 2);
console.log(mapped);

// custom map
console.log("");
Array.prototype.mymap = function (cb) {
    for (let i = 0; i < this.length; i++) {
        this[i] = cb(this[i], i, this);
    }
    return this;
};
mapped = array.mymap((elem, index, array) => elem * 2);
console.log(mapped);
