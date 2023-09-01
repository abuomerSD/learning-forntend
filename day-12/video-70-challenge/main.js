// challenge 1
let names = function (...names) {
    // for(let i =0; i<names.length ; i++) return `[${names[i]}],`;
    return names.forEach((name) => console.log(name))
}

console.log(names("eltayeb", "ahmed", "omer" , "waleed"));