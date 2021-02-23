var inputString = new String;
inputString = prompt("Please enter a sentence: ", "sentence");

var wordCount = inputString.match(/ /g);

	if (inputString == "") {
		
		alert("no input was defined.");
		
	}
		
	if (inputString != "") {
		
		if (wordCount == null) {
		
				alert("One word in: \n" + inputString);
		}
		
		if (wordCount.length > 1){
		
			alert(wordCount.length + 1 + " words in " + inputString);
		}
	
	}