var centimeters, inches, total, userChoice, userInput;

userChoice = prompt("Inches or centimeters?");

inches = "inches";

centimeters = "centimeters";

if (userChoice === inches) {
  userInput = prompt("How many " + userChoice + " ?");
  total = userInput * 2.54;
  alert("" + total + " centimeters");
}

if (userChoice === centimeters) {
  userInput = prompt("How many " + userChoice + " ?");
  total = userInput / 2.54;
  alert("" + total + " inches");
}

