function toBind(a, b) {
    console.log(this.name, this.age);
    console.log(a, b);
}

const obj = {
    name: "Selva",
    age: 24,
};

const binded = toBind.bind(obj, 1, 2);
const a = binded();
