reverseInput = prompt("Enter a string to reverse", "3<racecar3<") # input constructor
reverseOutput = new Array # output constructor

# calculate the length
inputLength = reverseInput.length
secondArg = inputLength - 1
x = 0

# for loop counting down
while x < reverseInput.length
  
  # console.log(reverseInput.slice(secondArg, inputLength));
  reverseOutput[x] = reverseInput.slice(secondArg, inputLength)
  x++
  inputLength--
  secondArg--
reverseoutputString = reverseOutput.join("")
alert reverseoutputString
