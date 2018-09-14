/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.
In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.
*/
// Using spread operator, an array can be expanded and pass it as an arguments
var numbers = [10, 50, 4, 65, 64, 6, 65, 4, 8479];
var min = Math.min.apply(Math, numbers);
console.log("The min value is : " + min);
// use spread operator to add an array in the middle of another array
var array1 = [30, 40, 50];
var array2 = [10, 20].concat(array1, [60, 70, 80]);
console.log("Array2 : " + array2);
// Use spread operator to create a new copy of an array
var tech1 = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap'];
var tech2 = tech1.slice();
console.log(tech2);
