var argOne, argTwo, userQuestion;
var questionLoop = true;

while (questionLoop === true) {
    var argOne = Math.floor((Math.random() * 10) + 1);
    var argTwo = Math.floor((Math.random() * 10) + 1);
    var userQuestion = prompt("What does " + argOne + " x " + argTwo +" equal?");
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
