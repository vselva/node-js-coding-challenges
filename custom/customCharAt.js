let string = "welcome to javascript";

// in build charAt
let characterAt = string.charAt(6);
console.log(characterAt);

// custom charAt
String.prototype.myCharAt = function (pos) {
    if (pos < 0 || pos > this.length || isNaN(pos)) return "";
    return this[pos];
};
let myCharacterAt = string.myCharAt(6);
console.log(myCharacterAt);
