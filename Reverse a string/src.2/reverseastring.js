var reverseInput = prompt("Enter a string to reverse" , "3<racecar3<"); // input constructor

var reverseOutput = new Array; // output constructor

// calculate the length
var inputLength = reverseInput.length;

var secondArg = inputLength - 1;

var x = 0;

// for loop counting down
while (x < reverseInput.length)
{

// console.log(reverseInput.slice(secondArg, inputLength));

reverseOutput[x] = reverseInput.slice(secondArg, inputLength);
x ++;

inputLength --;
secondArg --;

}

var reverseoutputString = reverseOutput.join("");

alert(reverseoutputString);
