// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create various Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Create variable Declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLowerCase;
var confirmUpperCase;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Promp comfirming how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many character would you like your Password? Choose between 8 and 128!"));

  while(confirmLength <= 7 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters! Try again");
    var confirmLength = (prompt("How many character would you like your Password? Choose between 8 and 128!"));
    } 

    // Repeat back how many charactes the user will have  
    alert(`Your password will have ${confirmLength} characters`);

  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters.");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters.");    
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters.");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters.");

  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters.");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters.");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters.");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters.");
  }

 // Assign an action to the password parameters
 var passwordCharacters = [];
 if (confirmSpecialCharacter) {
   passwordCharacters = passwordCharacters.concat(specialChar);
 }
 
 if (confirmNumericCharacter) {
   passwordCharacters = passwordCharacters.concat(number);
 }
   
 if (confirmLowerCase) {
   passwordCharacters = passwordCharacters.concat(alphaLowerC);
 }
 
 if (confirmUpperCase) {
   passwordCharacters = passwordCharacters.concat(alphaUpperC);
 }
 
 console.log(passwordCharacters)
 
 
 // Empty string to be filled based on for loop selecting random characters from the array
 var randomPassword = ""
   
 for (var i = 0; i < confirmLength; i++) {
     randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
     console.log(randomPassword);
   }
   return randomPassword;
 }
 