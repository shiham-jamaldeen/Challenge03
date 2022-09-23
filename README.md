# Challenge 03 - Password Generator

## Purpose
This is "Challenge 03" of the University of Adelaide Coding Bootcamp. The task is to create a random password generator using Javascript.

### Technologies used 
- HTML5 and Javascript
- Uses `arrays` and the `Math.random()` function


## URL of the application
https://shiham-jamaldeen.github.io/Challenge03/

## Preview/Screenshot of the application
![Random Password Generator](https://raw.githubusercontent.com/shiham-jamaldeen/Challenge03/main/Assets/03-javascript-homework-demo.png)

## Instructions to use the application
1. Enter the URL to your browser window: https://shiham-jamaldeen.github.io/Challenge03/
2. Select the Generate Password button.
3. Enter the length of the desired password.
    >**Note**: The system accepts no more than 8 characters minimum and a maximum of 128 characters.
4. Enter what type of characters to include in the password. 
    > **Note**: Your password may contain a combination of Uppercase, Lowercase, Numbers and Special Characters.<br/><br/>The following input is required:
    >  -    Include Uppercase characters in the password? (OK = Yes or Cancel = No)
    >  -    Include Lowercase characters in the password? (OK = Yes or Cancel = No)
    >  -    Include Numbers in the password? (OK = Yes or Cancel = No)
    >  -    Include Special characters in the password? (OK = Yes or Cancel = No)
5.  The password is generated (based on the password requirements in 4) and displayed in the text box.

## Logic/Algorithm
The `function generatePassword()` has the following logic:
1. User enters the desired password length
    - Check for password length.
    - If length of password <= 8 OR length of password >= 128 the display ERROR MESSAGE and request user to enter password
2. User enters the required type of characters -- Uppercase char, Lowercase char, Numbers AND/OR Special characters) in the password.
    - Check if at least one type of character is present.
    - If not present, display ERROR MESSAGE and request user to re-enter the desired type of character -- -- Uppercase char, Lowercase char, Numbers AND/OR Special characters
    - Check the character type
    - Build a `userChoiceArray` for each character type, selected by the user
 3. Obtain a random number from the Random Number Generator function
 4. Use the random number as the "index"
 5. Retrieve "elements" from the `userChoiceArray`, with the index generated in step 4
 6. Print the elements to a variable
 7. Repeat steps 3 to 6 until the length of the password is achieved
  
