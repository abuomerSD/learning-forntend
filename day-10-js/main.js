console.log(10 === "10");
console.log(typeof "omer" === typeof "10");

console.log(10 !== "10");

// conditional ternery opertor

let age = 30;

age >= 30 ? console.log("greater than 29"): console.log("29 or less");

// nullish coalescing operator and logical or

let price = null;
console.log(`the price is ${price || 200}`);
console.log(`the price is ${price ?? 200}`);
