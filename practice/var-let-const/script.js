//VAR - LET - CONST

//SCOPE

console.log("SCOPE");
//function scope -> var

// block scope -> let,const

{
  var a = 10;
}
console.log(a); // still accessible outside of block
//if we tried to change var to let or const it will show you an error let,const -> a is not defined,

{
  let a = 30;
  console.log(a); // only accessible inside of block
}

{
  const a = 40;
  console.log(a); //only accessible inside of block
}

console.log("SHADOWING");
//SHADOWING-> two types of shadowing
//1->Legal shadowing
//2->Illegal shadowing //if the let variable in global and you are trying to write the same element with var variable it will throw you an error.like that varible have already been declared

//var shadowing -> IN var it will simply overwites the value of particular element;
console.log("VAR SHADOWING");
var a = 100;
{
  var a = 200;
  let b = 300;
  console.log(a, b); //200,300
}
console.log(a); //200 // in line 31 a is 100 but we have overwrite the value of a to 200; it has changed in global tooo.

//let shadowing -> it will not overwrites the value of let variable;

console.log("LET SHADOWING");
let d = 100;
{
  let d = 300;
  let e = 400;
  console.log(d, e); //300,400
}
console.log(d); //d is 100 thats from the globle it will not changed if change it inside of block;

console.log("CONST SHADOWING");

const f = 100;
{
  const f = 300; /// you can change the type of var const -> let but not var
  const g = 200;
  console.log(f, g); //300,200
}
console.log(f); //100

////DECLARATION
console.log("DECLARATION");

var a;
var a;
var a;

//in var declarations we can declare in same-scope how many variables we want

// let l1;
// let l1;

// in let you cannot re-declare the variable in same-scope it will throw an error like variable has already declared;

// const c1 = 0;
// const c1 = 0;

// in const you cannot re-declare the const variable in same-scope and  it will through an error ike variable has already declared;

console.log("DECLARATION WITHOUT INIATIALIZATION");
/*
var a; //works fine
let a; ///works fine
const a;
*/
/// you should assign a value to a const variable;
console.log("RE-INITIALIZATION");
/* var a = 10;
a = 20; // in var you can re initialize
let b = 20;
b = 30; //in let you can change / re initialize
const c = 20;
c = 30; //in const you cannot re-initialize

*/

console.log("HOISTING");

/* 
    EXECUTION CONTEXT
    Whenever you write a javascript code
    Javascript Engine will scans out the document.
    There will be two phases will be happen
    Phase -1 ) Creation phase -> It has three phases inside
                                a ).Creates a global obj
                                b ).Setups a memory heap for storing variables and functions
                                c ).Initialize the a placeholder for a variables -> undefined
                                                                 for a functions -> function{...}
    Phase -2 ) Execution phase -> Executes a code line by line and initialize the values 
                                For every functions it will create another exectionn context for that function
*/

/* 
console.log(a);//undefined 
var a=10;
console.log(b);//it will throw an error like you cannot access a before initialization
let b=10;
console.log(c);//it will throw an error like you cannot access a before initialization
const c=20;
*/