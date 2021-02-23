var argOne, argTwo, userQuestion;
var questionLoop = true;

var multiples = prompt('Enter multiples to learn:', '0,1,2,3,4,5,6,7,8,9,10');
var multiplesArray = multiples.split(",").map(Number); // string to array 

while (questionLoop === true) {
    // var argOne =	Math.floor((Math.random() * 10) + 1);
	argOne =  Math.floor((Math.random() * multiplesArray.length) + multiplesArray[0]]); 
    argTwo =  Math.floor((Math.random() * multiplesArray.length) + multiplesArray[0]]);  
	userQuestion = prompt("What does " + argOne + " x " + argTwo +" equal?");
    if (argOne * argTwo == userQuestion) {
        alert("Correct!");
    }
    if (argOne * argTwo != userQuestion) {
        alert("Wrong!");
    }
    if (userQuestion == "q") {
	questionLoop = false;
    }

}
