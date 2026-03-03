// 36. What is the difference between deep copy and shallow copy in
// JavaScript? How can you achieve both?

let obj1 = { name: "Afnan", address: { city: "Hyderabad" } };

let obj2 = { ...obj1 };

obj2.address.city = "Delhi";

console.log(obj1.address.city); // Delhi