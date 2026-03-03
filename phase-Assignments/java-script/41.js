// 41. What is destructuring and how can you rename variables while
// destructuring an object?

// What is Destructuring?

// Destructuring lets you extract values from objects or arrays and store them in variables in a clean, short way.
const user = {
  name: "Afnan",
  age: 23
};

const { name, age } = user;

console.log(name, age);