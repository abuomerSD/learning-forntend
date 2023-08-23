// concatenation 

let a = "hello";
let b = "world";

document.write(a + " " + b);

// Template Literals 

let title = "Title";
let pragraph = "Paragraph";

let card = `
    <div class = "parent-div">
        <div class = "child-div">
            <h2>${title}</h2>
            <p>${pragraph}</p>
        </div>
    </div>
`
document.write(card);

let e = "Hello";
let f = "World";

document.write(`${e} ${f}`);

let num = 11
console.log(11 % 2);
console.log(num++);
console.log(num);
console.log(++num);
console.log(num);

console.log("******************************************");
console.log(+100);
console.log(+"100");
console.log(+"Eltayeb");
console.log(+"-100");

console.log("******************************************");
console.log(-100);
console.log(-"100");
console.log(-"Eltayeb");
console.log(-"-100");

console.log("******************************************");
console.log(1_000_000);
console.log(1e6);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE +200000);