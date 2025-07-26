var checkIfInstanceOf = function (obj, classFunction) {
    return obj instanceof classFunction;
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
console.log(checkIfInstanceOf(dog, Animal));
console.log(checkIfInstanceOf(dog, Object));
