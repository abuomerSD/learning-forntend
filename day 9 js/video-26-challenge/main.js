let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(`
a = ${a}
b = ${b}
c = ${c}
d = ${d}
`);

// find smallest number a return it as integer
console.log(Math.round(Math.min(a, b, c, d)));

// use a and d one time to get 10,000
console.log(Math.pow(a, Math.round(d)));

// get 2 from d variable by using 4 methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));
console.log(d.toFixed());