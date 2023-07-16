// JavaScript code (Help from some Tutorials/Classmates/Instructor)
var letters = ('abcdefghijklmnopqrstuvwxyz');
var numbers = ('1234567890');
var special = ('!@#$%^&*+=?/');

var generatePassword = function() {
    var letteroption = window.confirm('Include letters?');
    var numberoption = window.confirm('Include numbers?');
    var specialoption = window.confirm('Include special characters?');
    var lengthoption = window.prompt('Enter desired length of your password, between 8 to 128');

    var specialcharacters = []

    if (letteroption) {
        var index = Math.floor(Math.random() * letters.length);
        console.log(letters[index]);
        specialcharacters.push(letters[index]);
    }

    if (numberoption) {
        var index = Math.floor(Math.random() * numbers.length);
        console.log(numbers[index]);
        specialcharacters.push(numbers[index]);    
    }
    
    if (specialoption) {
        var index = Math.floor(Math.random() * special.length);
        console.log(special[index]);
        specialcharacters.push(special[index]);    
    }
}