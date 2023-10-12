
function getPerson(person) {
    try {
        if (typeof person !== 'object' || !person.name || !person.age) {
            throw new Error("Invalid parameter type");
          }
        return output = `Name : ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return "invalid parameter type"
    }
}
console.log(getPerson({ name:"mithun", age: 20}));
console.log(getPerson({ name:"mithun"}));
console.log(getPerson(["name","mithun"]));