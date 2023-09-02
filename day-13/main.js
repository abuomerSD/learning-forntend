// dot notation vs bracket notation

let user = {
    name: "Etayeb",
    age: 30,
    "country is":"Sudan",
};

console.log(user.name);
console.log(user.age);
console.log(user["country is"]);

let user2  ={
    name: "Ahmed",
    age: 26,
    skills: ["HTML", "CSS", "JS"],
    available: true,
    country: {
        Sudan: "Khartoum",
        Ksa: {
            one: "Riyadh",
            two: "Dammam",
        }
    },
    isAvailable: () =>{
        if(user.available === true) return `${user.name} is Free for work`;
        else return `${user.name} is not Free for work`;
    },
};

console.log(user2.name);
console.log(user2.age);
console.log(user2.country.Sudan);
console.log(user2.country.Ksa.one);
console.log(user2.country.Ksa.two);
console.log(user2.isAvailable());

let user3 = new Object();

user3.name = "Omer";
user3.age = "30";
user3.sayHello = () => {
    return `Hello ${user3.name}`;
}


console.log(user3);
console.log(user3.sayHello());

// window.onload = () => {
//     document.getElementById("click-me").onclick = () => {
//         console.log(this);
//     }
//     let div = document.getElementById("mydiv");
//     console.log(div);
// }

// document.querySelectorAll("button").onclick = ()=> {
//     console.log(this);
// }

document.getElementById("click-me").onclick = () => {
    console.log(this);
}
let div = document.getElementById("mydiv");
console.log(div);

