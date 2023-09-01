function printName(name) {
    console.log(name);
}

printName("Elateyb");

let printFullName = (name) => {
    console.log(name);
}

printFullName("Ahmed Ibrahim");

let names = ["eltayeb", "ibrahim", "ahmed", "omer", "amgad", "ali" ,"ayman", "osama", "mohammed"];

let numbers = [1, 2, 3, 4, 5];

let getNumber = numbers.map((number)=> {
    return number + number;
});

console.log(getNumber);

let getAnames = names.filter((name)=>{
    return name.startsWith("a") ? name : "";
});

console.log(getAnames);

let user = {
    name: "eltayeb",
    age: 30,
    salary: 2000,
    sayHello: ()=>{
        return "Hello";
    },
};

console.log(user.name);
console.log(user.age);
console.log(user.salary);
console.log(user.sayHello());