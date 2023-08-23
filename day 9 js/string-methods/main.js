let fName = "  Eltayeb  ";

console.log(`fname length is : ${fName.length}`);
console.log(fName.charAt(5));
console.log(fName.trim());
console.log(fName.toUpperCase().trim());
console.log(fName.toLowerCase().trim());
console.log(`fname length after trim is : ${fName.trim().length}`);

console.log("==============================");

let title = "Elzero Web School";

console.log(title.indexOf("web")); // -1 because it is case sensitive
console.log(title.indexOf("Web")); // 7
console.log(title.lastIndexOf("o"));

console.log("=".repeat(30));

console.log(title.slice(2,6));
console.log(title.slice(-6,-1));

console.log(title.split(" ", 2));

console.log(title.substring(0, 6));
console.log(title.substr(7, 3));

console.log(title.includes("School"));
console.log(title.startsWith("W", 7 ));
console.log(title.endsWith("b", 10));