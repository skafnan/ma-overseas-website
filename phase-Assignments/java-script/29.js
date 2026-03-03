// 29. Write a program that uses Object.keys(), Object.values(),
// Object.entries() and prints each.

let student = {
  name: "Afnan",
  age: 22,
  course: "JavaScript"
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

["name", "age", "course"]
["Afnan", 22, "JavaScript"]
[["name", "Afnan"], ["age", 22], ["course", "JavaScript"]]