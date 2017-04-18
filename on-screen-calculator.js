/*
=============================================================
                         Warm Up
=============================================================
*/
function myMax(array){
	array.sort(function(a,b){ return a - b});
	return array[array.length - 1];
};

function vowelCount(string){
	var vowels =["a","e","i","o","u"];
	function isAVowel(letter) {
		return vowels.includes(letter.toLowerCase());
	};   
	var arrayOfString = string.split("");
	var vowelsInString = arrayOfString.filter(isAVowel);
	return vowelsInString.length;
    
};

function reverse(string){
	var arrayOfChars = string.split("");
	return arrayOfChars.reverse().join("");
};

//console.log(myMax([1,56.9,2,3,-1,0]));
//console.log(vowelCount("vowel count"));
//console.log(reverse("this is a string"));

/*
=============================================================
                         Calculator
=============================================================
*/
var inputNumbers = [];
var operation;
var result;
var num1;
var num2;
var numberButtons = document.querySelectorAll(".number");
var operationButtons = document.querySelectorAll(".operation");
var screenShow = document.querySelector(".screen");
var equalButton = document.querySelector(".equal");
var clearButton = document.querySelector(".clear-button");

function add(num1, num2){
	return num1 + num2;
};

function subtract(num1, num2){
	return num1 - num2;
};

function multiply(num1, num2){
	return num1 * num2;
};

function divide(num1, num2){
	return num1 / num2;
};

function showONScreen(text){
    var newTextNode = document.createTextNode(text);
    screenShow.appendChild(newTextNode);
};

function clear(){
    inputNumbers = [];
    operation = "";
    result = 0;
    num1 = 0;
    num2 = 0;
};


//Get Input Numbers
for (i = 0; i < numberButtons.length; i ++){    
	numberButtons[i].addEventListener("click", function(event){
		var number = event.currentTarget.innerHTML;
		inputNumbers.push(number); 
		showONScreen(number);   
    })
};

//Get Operation
for (i = 0; i < operationButtons.length; i++){
    operationButtons[i].addEventListener("click", function(event){
        operation = event.currentTarget.innerHTML;
        num1 = Number(inputNumbers.join(""));
        inputNumbers = []; 
        showONScreen(operation);
    })
};

//Calcultate and Show Result
equalButton.addEventListener("click", function(){
    num2 = Number(inputNumbers.join(""));
    switch (operation){
        case "+":
        	result = add(num1, num2);           
            break;
        
        case "-":
        	result = subtract(num1, num2);  	
            break;

        case "*":
            result = multiply(num1, num2);
            break;

        case "/":
            result = divide(num1, num2);      
            break;
    };
    showONScreen("="+result);
    clear();
});



clearButton.addEventListener("click", function(){
	clear();
	screenShow.innerHTML = "";
})





