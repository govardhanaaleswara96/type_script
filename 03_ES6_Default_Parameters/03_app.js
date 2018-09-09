/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function getACar(model, color) {
    if (color === void 0) { color = 'Black'; }
    var spec = "Your " + model + " car is ready with color " + color;
    return spec;
}
var car1 = getACar('Benz');
console.log(car1);
