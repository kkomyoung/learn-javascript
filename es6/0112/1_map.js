var person = [
  {name: "Tom", age: 17},
  {name: "Huck", age: 18},
  {name: "Becky", age: 20}
];

var names = person.map(person => person.name);
var ages = person.map(person => person.age);

console.log(names);
console.log(ages);