let user = [
  "karimnagar",
  "bangalore",
  "mumbai",
  "jammu",
  "kashmir",
  "ladak",
  "goa",
  "hyderbad",
];
//slice start point is inclusive,and end point is exclusive
//slicing means that cutting a piece out of cake ..
console.log(user.slice(0, 3)); // karimnagar-0,bangalore-2,mumbai-3//here the 0 start(which is inclusive) and 2 is the end position(which is exlusive)

console.log(user.slice(2)); //1-> bangalore which means we have given the end point so it will get sliced offf till the point (which includes)

console.log(user.slice(user.length)); //slice of all elements 0 to length of array;

console.log(user.slice(user.length - 1)); //it will slice all the element and keeps the  elements array length -1;

//splice
//splice is something which is usefull whenever you want to remove chunk of element and add new element in that position;

const array = [
  "karimnagar",
  "bangalore",
  "mumbai",
  "jammu",
  "kashmir",
  "ladak",
  "goa",
  "hyderbad",
];
// array.splice(0,5,'added new element after 5th point')//startpoint,deleteCount,and 'insert ele'
// console.log(array);

// array.splice(0, 5)//it will simply slice them off 0 to 5(exclusive),it will start from 0 and delete the  5 elements
// console.log(array)
//you can add the any number of elements to that array;;
console.log("here");
array.splice(array.length - 1); //prints all elments in array expect last element
console.log(array);
