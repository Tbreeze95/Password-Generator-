// Assignment Code
var letters = 'abcdefghijklmnopqrstuvwxyz';
var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var special = '!@#$%^&*+=?/';

var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
    var lengthoption = window.prompt('Enter desired length of your password, between 8 to 128');

    if (lengthoption < 8) {
        alert('asjdkasdjnasd')
        return null
    }
    if (lengthoption > 128) {
        alert('assdssdfj')
        return null
    }
    // Number.isNaN
    if (Number.isNaN(lengthoption)){
        alert('must be a number')
        return null
    }

    var lettersoption = window.confirm('Include letters?');
    var numbersoption = window.confirm('Include numbers?');
    var specialoption = window.confirm('Include special characters?');
    var capLettersoption = window.confirm('Include capital letters?');

    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected

    var specialcharacters = []

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

    for (var i = 0; i < lengthoption; i++) {
        temp.push(specialcharacters[Math.floor(Math.random() * specialcharacters.length)]);
    }
    
    var specialcharacters = temp.join('');
    console.log(temp.join(''))
    // how do we convert an array into a string with no commas?
    
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
