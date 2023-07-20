// Assignment Code
var letters = 'abcdefghijklmnopqrstuvwxyz';
var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var special = '!@#$%^&*+=?/';
var generateBtn = document.querySelector("#generate");

// Created a function to prompt the user to select their desired character length
var generatePassword = function () {
    var lengthoption = window.prompt('Enter desired length of your password, between 8 to 128');

    // Provided some if statemetnts to hep alleviate user errors and redirect them back to a successful point 

    if (lengthoption < 8) {
        alert('Character length must be greater than or equal to 8 characters')
        return null
    }
    if (lengthoption > 128) {
        alert('Character length must be less than or equal to 128 characters')
        return null
    }
    // Number.isNaN was used here to make sure the user submits a number and not other "invalid" characters.. if they do submit an invalid input the password won't create and they'll be redirected back to the starting point 
    if (Number.isNaN(lengthoption)){
        alert('must be a number')
        return null
    }

    var lettersoption = window.confirm('Include letters?');
    var numbersoption = window.confirm('Include numbers?');
    var specialoption = window.confirm('Include special characters?');
    var capLettersoption = window.confirm('Include capital letters?');

    var specialcharacters = []

    // used concat and split on this if statements to help combine arrays into a randomized string (Hence how the passcode comes along)
    if (lettersoption) {
        specialcharacters = specialcharacters.concat(letters.split(''));
        console.log(specialcharacters);
    }


    if (numbersoption) {
        specialcharacters =specialcharacters.concat(numbers.split(''));
        console.log(specialcharacters);
    }

    if (specialoption) {

        specialcharacters =specialcharacters.concat(special.split(''));
        console.log(specialcharacters);
    }

    if (capLettersoption) {
        specialcharacters =specialcharacters.concat(capLetters.split('')); console.log(specialcharacters);
    }

    var temp = []
    // 
    for (var i = 0; i < lengthoption; i++) {
        temp.push(specialcharacters[Math.floor(Math.random() * specialcharacters.length)]);
    }
    
    var specialcharacters = temp.join('');
    console.log(temp.join(''))
    // converted this array into a string without commas using .join method
    
    return specialcharacters
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
