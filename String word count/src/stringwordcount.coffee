inputString = new String
inputString = prompt("Please enter a sentence: ", "sentence")
wordCount = inputString.match(RegExp(" ", "g"))
alert "no input was defined."  if inputString is ""
unless inputString is ""
  alert "One word in: \n" + inputString  unless wordCount?
  alert wordCount.length + 1 + " words in " + inputString  if wordCount.length > 1
