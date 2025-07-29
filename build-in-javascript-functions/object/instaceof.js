var checkIfInstanceOf = function (obj, classFunction) {
    if (obj == null || typeof classFunction !== "function") {
        return false;
    }

    let proto = Object.getPrototypeOf(obj);

    while (proto !== null) {
        if (proto === classFunction.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
};

class Animal {
    walk() {
        console.log("walk");
    }
}
class Dog extends Animal {
    bark() {
        console.log("bark");
    }
}
const dog = new Dog();
console.log(checkIfInstanceOf(dog, Dog));

console.log("");
console.log(checkIfInstanceOf(dog, Animal));

console.log("");
console.log(checkIfInstanceOf(dog, Object));

console.log("");
console.log(checkIfInstanceOf(new Date(), Date));

console.log("");
console.log(checkIfInstanceOf(undefined, Array));
