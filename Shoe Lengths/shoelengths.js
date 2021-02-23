var femaleGender, femaleLengths, femaleSizes, maleGender, maleLengths, maleSizes, typeOne, typeTwo, userGender, userLength, userType, x;

userType = prompt("Inches or centimeters?");

userLength = prompt("Length in inches?");

userGender = prompt("Male or female?");

typeOne = "inches";

typeTwo = "centimeters";

femaleGender = "female";

maleGender = "male";

femaleLengths = [8.1875, 8.375, 8.5, 8.75, 8.875, 9.0625, 9.25, 9.375, 9.5, 9.6875, 9.875, 10, 10.1875, 10.3125, 10.5, 10.6875, 10.875];

maleLengths = [9.25, 9.5, 9.625, 9.75, 9.9375, 10.125, 10.25, 10.4375, 10.5625, 10.75, 10.9375, 11.125, 11.25, 11.5625, 11.875, 12.1875, 12.5];

femaleSizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];

maleSizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15, 16];

if (userGender === femaleGender) {
if (userType === typeTwo) {
userLength = userLength / 2.54;
}
for (x = 0; x < femaleLengths.length; x++) {
if (userLength <= femaleLengths[x]) {
alert("You\'re size is " + femaleSizes[x]);
x = 18;
}
}
}

if (userGender === maleGender) {
if (userType === typeTwo) {
userLength = userLength / 2.54;
}
for (x = 0; x < maleLengths.length; x++) {
if (userLength <= maleLengths[x]) {
alert("You\'re size is " + maleSizes[x]);
x = 18;
}
}
}
