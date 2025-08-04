function toApply(a, b) {
    console.log(this.name, this.age);
    console.log(a, b);
}

const obj = {
    name: "Selva",
    age: 24,
};
toApply.apply(obj, [1, 2]);
