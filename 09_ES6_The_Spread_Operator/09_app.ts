/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.
In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.
*/

// Using spread operator, an array can be expanded and pass it as an arguments
let numbers:Array<number> = [10,50,4,65,64,6,65,4,8479];
let min:number = Math.min(...numbers);
console.log(`The min value is : ${min}`);

// use spread operator to add an array in the middle of another array
let array1:Array<number> = [30,40,50];
let array2:Array<number> = [10,20,...array1,60,70,80];
console.log(`Array2 : ${array2}`);

// Use spread operator to create a new copy of an array
let tech1:Array<string> = ['HTML','CSS','JavaScript','JQuery','Bootstrap'];
let tech2:Array<string> = [...tech1];
console.log(tech2);
