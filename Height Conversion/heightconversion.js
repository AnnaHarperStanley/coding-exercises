var evailLoop, feet, inches, userInput;

userInput = prompt("How many inches tall?");

evailLoop = true;

var feet = ~~(userInput / 12);

inches = userInput % 12;

alert("You're " + feet + " feet " + inches + " inches high");

