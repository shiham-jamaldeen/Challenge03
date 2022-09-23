// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//This function will ask the user for their choice generating a password and then generate a random password
function generatePassword() {
  var finalResult = ""; //this is the final password presented to the user
  var userChoiceArray = [];//stores the user choice of CHAR password: UPPERCASE, LOWERCASE, NUMBER and SPECIAL CHAR 
  const upperCaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerCaseCharArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const specialCharArray = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "~",
    "`",
    "(",
    ")",
    "-",
    "+",
    "=",
    ";",
    "<",
    ">",
    "/",
    "?",
    "|",
  ];
  const numberCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //input to request password length
  var passwordLength = window.prompt(
    "Enter password length " + " (min 8 - max 128 characters):"
  );
  //loop to check if length being 8-128 char
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt(
      "ERROR: Your password must be between 8 - 128 characters, TRY AGAIN: "
    );
  }
  //input to accept the user's choice, atleast one should be specified
  var isUpperCaseChar = window.confirm(
    "Click OK to include UPPERCASE characters in the password " +
      "(OK = Yes  Cancel = No)"
  );
  var isLowerCaseChar = window.confirm(
    "Click OK to include lowercase characters in the password " +
      "(OK = Yes  Cancel = No)"
  );
  var isNumbersChar = window.confirm(
    "Click OK to include numbers in the password" + "(OK = Yes  Cancel = No)"
  );
  var isSpecialChar = window.confirm(
    "Click OK to include special characters in the password" +
      "(OK = Yes  Cancel = No)"
  );
  //check if atleast one password condition is chosen by the user, otherwise repeat
  if (
    isUpperCaseChar === false &&
    isLowerCaseChar === false &&
    isNumbersChar === false &&
    isSpecialChar === false
  ) {
    window.alert(
      "ERROR: Select at least ONE password criteria" + "\n" + "(UPPERCASE, LOWERCASE, NUMEBERS OR SPECIAL CHAR)"+"\n" + "TRY AGAIN!");
    isUpperCaseChar = window.confirm(
      "Click OK to include UPPERCASE characters " + "(OK = Yes  Cancel = No)"
    );
    isLowerCaseChar = window.confirm(
      "Click OK to include lowercase characters " + "(OK = Yes  Cancel = No)"
    );
    isNumbersChar = window.confirm(
      "Click OK to include numbers?" + "(OK = Yes  Cancel = No)"
    );
    isSpecialChar = window.confirm(
      "Click OK to include special characters?" + "(OK = Yes  Cancel = No)"
    );
  }

  //summary of user's password requirement
  window.alert(
    "Summary of your password requirements\n" +
      "Length: " +
      passwordLength +
      "\n" +
      "Uppercase char: " +
      isUpperCaseChar +
      "\n" +
      "Lowercase char: " +
      isLowerCaseChar +
      "\n" +
      "Number char: " +
      isNumbersChar +
      "\n" +
      "Special char: " +
      isSpecialChar
  );

  //compile a user array based on the user choice of password

  if (isUpperCaseChar === true) {
    //concat Upper Case Char Array to User Choice Array
    userChoiceArray = userChoiceArray.concat(upperCaseArray);
    //console.log("Display User Choice Array contents: " + userChoiceArray);
  }

  if (isLowerCaseChar === true) {
    //concat Lower Case Char Array to User Choice Array
    userChoiceArray = userChoiceArray.concat(lowerCaseCharArray);
    //console.log("Display User Choice Array contents: " + userChoiceArray);
  }

  if (isNumbersChar === true) {
    //concat Number Array to User Choice Array
    userChoiceArray = userChoiceArray.concat(numberCharArray);
    //console.log("Display User Choice Array contents: " + userChoiceArray);
  }

  if (isSpecialChar === true) {
    //concat SpecialChar Array to Choice Array
    userChoiceArray = userChoiceArray.concat(specialCharArray);
    //console.log("Display User Choice Array contents: " + userChoiceArray);
  }
  //use for loop to generate random password
  for (i = 0; i < passwordLength; i++) {
    //obtain a random index of using the Random Number Generator function
    var randIndex = Math.floor(Math.random() * userChoiceArray.length);
    //obtain the random element returned fron the "random elemnent"
    var randElement = userChoiceArray[randIndex];
    //assign the values (elements) to the variable finalResult
    finalResult += randElement;
  }
  return finalResult;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
