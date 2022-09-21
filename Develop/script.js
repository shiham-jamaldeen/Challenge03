// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//This function will ask the user for their choice,i.e. generating a password of their choice
function generatePassword() {
  var finalResult = "";//this is the final password presented to the user
  
//input password length
 var passwordLength = window.prompt(
    "Enter password length " + " (min 8 - max 128 characters):"
  );
//loop to check if length being 8-128 char
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt(
      "Your password must be between 8-128 characters, try again: "
    );
  }
 //input to accept the user's choice, atleast one should be specified 
  var isUpperCaseChar = window.confirm ("Click OK to include UPPERCASE characters " + "(OK = Yes  Cancel = No)" );
  var isLowerCaseChar = window.confirm ("Click OK to include lowercase characters " + "(OK = Yes  Cancel = No)");
  var isNumbersChar = window.confirm ("Click OK to include numbers?" + "(OK = Yes  Cancel = No)");
  var isSpecialChar = window.confirm ("Click OK to include special characters?" + "(OK = Yes  Cancel = No)");
  
  //check if atleast one password condition is chosen by the user
  if (isUpperCaseChar===false) {
    window.alert ("ERROR: At least one condition must exist, try again!");
    isUpperCaseChar = window.confirm ("Click OK to include UPPERCASE characters " + "(OK = Yes  Cancel = No)" );
  }else if(isLowerCaseChar===false){
    window.alert ("ERROR: At least one condition must exist, try again!");
    isLowerCaseChar = window.confirm ("Click OK to include lowercase characters " + "(OK = Yes  Cancel = No)");
  }else if (isNumbersChar===false){
    window.alert ("ERROR: At least one condition must exist, try again!");
    isNumbersChar = window.confirm ("Click OK to include numbers?" + "(OK = Yes  Cancel = No)");
  }else if (isSpecialChar===false) {
    window.alert ("ERROR: At least one condition must exist, try again!");
    isSpecialChar = window.confirm ("Click OK to include special characters?" + "(OK = Yes  Cancel = No)");
  }

  //summary of user's password requirement
 window.alert ("Summary of your password requirements\n" + "Length: " + passwordLength + "\n" + "Uppercase char: " + isUpperCaseChar + "\n" + "Lowercase char: " + isLowerCaseChar +"\n" + "Number char: " + isNumbersChar + "\n" + "Special char: " + isSpecialChar);

//compile a user array based on the user choice of password

  if (isUpperCaseChar===true) {
    const upperCaseArray=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var userChoiceArray = [];
    //concat Upper Case Char Array to User Choice Array 
    userChoiceArray = userChoiceArray.concat(upperCaseArray);
    console.log("Display User Choice Array contents: " + userChoiceArray);
    
  }
 
  if (isLowerCaseChar===true){
    const lowerCaseCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    userChoiceArray = userChoiceArray.concat (lowerCaseCharArray);
    console.log("Display User Choice Array contents: " + userChoiceArray);
  }
  
  if (isNumbersChar===true) {
  const numberCharArray = ["0","1","2","3","4","5","6","7","8","9"];
  userChoiceArray = userChoiceArray.concat(numberCharArray);
  console.log("Display User Choice Array contents: " + userChoiceArray);
  }
  
  if (isSpecialChar===true) {
  const specialCharArray=["!","@","#","$","%","^","&","*","~","`","(",")","-","+","=",";","<",">","/","?","|"];
  userChoiceArray = userChoiceArray.concat(specialCharArray);
  console.log("Display User Choice Array contents: " + userChoiceArray);
  }
  

  //var resultR= RandomPasswordGeneratorNumbers(passwordLength);
  //finalResult = finalResult + resultR;
  //return finalResult;  
  
  
}
//This function generates the password if a numeric password is the user's choice
function RandomPasswordGeneratorNumbers(passwordLength) {
  //const numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const alphanumericCharArr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()~`";
  var result = ""; // stores the number 
  for (i = 0; i < passwordLength; i++) {
    var randIndex = Math.floor(Math.random() * alphanumericCharArr.length);
    var randElement = alphanumericCharArr[randIndex];
    result += randElement; //concatonate values from the array to the "result"
    }
  //console.log("this is your numeric password: " + result);
  return result;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
