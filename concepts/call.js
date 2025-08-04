function toCall(a, b) {
    console.log(this.name, this.age);
    console.log(a, b);
}

const obj = {
    name: "Selva",
    age: 24,
};
toCall.call(obj, 1, 2);
