//Gregory Goldshteyn
//I pledge my honor that I have abided by the Stevens Honor System
//Lab 1

//1 Sum of Squares
function sumOfSquares(num1, num2, num3){

	if(typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number"){
		return (num1 * num1) + (num2 * num2) + (num3 * num3)
	}
	else{
		throw "Type error: all arguments must be strings"
	}

}

//2 Say Hello To
function sayHelloTo(firstName, lastName, title){
	
	if(firstName === undefined){
		throw "At least first name must be defined"
	}
	else if(lastName === undefined && typeof firstName == 'string'){
		console.log("Hello, " + firstName + "!");
	}
	else if(title == undefined && typeof firstName == 'string' && typeof lastName == 'string'){
		console.log("Hello, " + firstName + " " + lastName + ". I hope you are having a good day!");
	}
	else if(typeof firstName == 'string' && typeof lastName == 'string' && typeof title == 'string'){
		console.log("Hello, " + title + " "  + firstName + " " + lastName + "! I hope you are having a good evening!")
	}
	else{
		throw "Type error: all arguments must be strings"
	}
	
}

//3 Cups of Coffee - Solved recursively
function cupsOfCoffee(howManyCups){
	
	if(typeof howManyCups != 'number'){
		throw "Type error: argument must be a number"
	}
	
	if(howManyCups < 1){
		throw "Cannot start with fewer than 1 cup of coffee on the desk"
	}
	
	if(howManyCups == 1){
		
		console.log("1 cup of coffee on the desk! 1 cup of coffee!");
		console.log("Pick one up, drink the cup, no more coffee left on the desk!");
		
	}
	else if(howManyCups == 2){
		
		console.log("2 cups of coffee on the desk! 2 cups of coffee!");
		console.log("Pick one up, drink the cup, 1 cup of coffee on the desk!");
		console.log();
		
		cupsOfCoffee(howManyCups - 1);
		
	}
	else{
		
		console.log(howManyCups + " cups of coffee on the desk! " + howManyCups + " cups of coffee!");
		console.log("Pick one up, drink the cup, " + (howManyCups - 1) + " cups of coffee on the desk!");
		console.log();
		
		cupsOfCoffee(howManyCups - 1);
		
	}
	
}

//4 Occurances of substring - was not sure whether to name this function countOccurrencesOfSubstring, so I added that later
function occurrencesOfSubstring(fullString, substring){
	
	if(typeof fullString === 'string' && typeof substring === 'string'){
		if(fullString.length > 0 && substring.length > 0){
			if(fullString.length < substring.length){
				return 0
			}
			else if(fullString.substr(0, substring.length) == substring){
				return 1 + occurrencesOfSubstring(fullString.substr(1), substring);
			}
			else{
				return occurrencesOfSubstring(fullString.substr(1), substring);
			}
		}
		else{
			return 0;
		}
	}
	else{
		throw "Type error: both arguments must be strings";
	}
	
}

//Just in case name was incorrect
function countOccurrencesOfSubstring(fullString, substring){
	return occurrencesOfSubstring(fullString, substring);
}

//Shuffle function, used in problem 5. Implementation based on in place sort algorithm
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

//5 randomized sentences
function randomizeSentences(paragraph){
	
	if(typeof paragraph === 'string'){
		
		var parArray = paragraph.match(/[^.!?]+[.!?]/g);
		var retString = "";
		
		for(var i = 0; i < parArray.length; i++){
			
			if(parArray[i].charAt(0) === ' '){
				parArray[i] = parArray[i].substr(1);
			}
			
		}
		
		shuffle(parArray);

		for(var i = 0; i < parArray.length; i++){
			
			retString = retString + parArray[i] + " ";
			
		}
		
		return retString;
		
	}
	else{
		throw "Type error: argument must be a string";
	}
	
}


//Testing based on examples provided. Note: I added a question to the paragraph in 5 to test question mark splitting

//1
console.log(sumOfSquares(5, 3, 10))
//2
try{
	sayHelloTo();
}
catch(error){
	console.log("Say hello to encountered an error! ", error);
}
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr.");
//3
cupsOfCoffee(5);
//4
console.log(occurrencesOfSubstring("Hello world!", "o"));
console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));
//5
console.log(randomizeSentences("Hello, world! May I ask you a Question? I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));