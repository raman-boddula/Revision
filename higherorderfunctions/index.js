const users = [
  { firstname: "raman", lastname: "chinna", age: 22 },
  { firstname: "surya", lastname: "naidu", age: 24 },
  { firstname: "naresh", lastname: "pandu", age: 24 },
  { firstname: "dheeraj", lastname: "dheeru", age: 23 },
  { firstname: "mahi", lastname: "nandu", age: 25 },
  { firstname: "mahesh", lastname: "mahi", age: 25 },
];


//to print raman chinna

const output = users.map((el) => el.firstname + " " + el.lastname);
console.log(output);
const age = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]=++acc[curr.age];
    } else { 
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(age);

const arr = [2, 4, 6, 7, 8, 10];

//sum
const out = arr.reduceRight((acc, curr) => {
    acc += curr;
    return acc;
})
console.log(out);
//max

const max = arr.reduceRight((acc, curr) => {
    if (acc < curr) {
        acc = curr;
    }
    return acc;
})
console.log(max);

//list the ppl who has age  less than 23
const age25 = users.filter((el) => {
    return el.age > 23;
})
console.log(age25);
//print the firstname whose age less 23;

const age23 = users.filter((el) => {
    return el.age > 23;
}).map((el) => {
    return el.firstname+"-"+el.lastname;
})
console.log(age23);

const age22 = users.reduce((acc, el) => {
    if (el.age > 23) {
        acc=[...acc,el.firstname]
    }
    return acc;
},[])
console.log(age22)