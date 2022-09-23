# Challenge 03 - Password Generator

## Purpose
This is "Challenge 03" of the University of Adelaide Coding Bootcamp. The task is to create a random password generator using Javascript. The password is generated based on user's input:
-   Password length (min 8 to max 128 char)
-   Character types -- Uppercase, Lowercase, Numbers and Special Characters

### Technologies used 
- HTML5 and Javascript
- Uses `arrays` and the `Math.random()` function


## URL of the application
https://shiham-jamaldeen.github.io/Challenge03/

## Preview of the application
![Random Password Generator application preview](https://raw.githubusercontent.com/shiham-jamaldeen/Challenge03/main/Assets/03-javascript-homework-demo.png)

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

## Algorithm
The `function generatePassword()` has the following logic:
1. User enters the desired password length
    - Check the `password length` is between 8 to 128 characters 
    - If not, display ERROR MESSAGE and request user to re-enter `password length`
2. User enters the required type of characters -- `Uppercase char`, `Lowercase char`, `Numbers` AND/OR `Special char` in the password.
    - Check if at least one type of character is present.
    - If not present, display ERROR MESSAGE and request user to re-enter the desired type of character -- `Uppercase char`, `Lowercase char`, `Numbers` AND/OR `Special char`
 3. Check the required character type
 4. Build a `userChoiceArray` for each character type, selected by the user
 5. Obtain a random number from the Random Number Generator function
 6. Use the random number as the "index"
 7. Retrieve "elements" from the `userChoiceArray`, with the index generated in step 6
 8. Print the element (of the `userChoiceArray`) to a variable (**Note** This will be the password generated)
 9. Repeat steps 5 to 8 until the desired password length is achieved
