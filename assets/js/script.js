// function to get password length from user
function passwordLength() {
  var promptLength = window.prompt('How many characters would you like your password to be? Enter a number between 1 and 128.');
  // invalid input
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("Please enter a number between 1 and 128.")
    return passwordLength();
  }
  else {
    window.alert("Your password will be " + promptLength + " characters long.")
    return passwordCharacters();
  }  
}

// function to determine characters to use
function passwordCharacters (){
  // ask if user wants to include uppercase characters
  var confirmUpper = confirm("Would you like to use uppercase letters?");
    if (confirmUpper) {
      window.alert("Your password will include uppercase letters.")
    }
    else {
      window.alert("Your password will not include uppercase letters.")
    }

  // ask if user wants to include lowercase characters
  var confirmLower = confirm("Would you like to use lowercase letters?");
    if (confirmLower) {
      window.alert("Your password will include lowercase letters.")
      charactersAllowed.push('lower');
    }
    else {
      window.alert("Your password will not include lowercase letters.")
    }
  
  // ask if user wants to include numbers
  var confirmNumber = confirm("Would you like to use numbers?");
    if (confirmNumber) {
      window.alert("Your password will include numbers.")
      charactersAllowed.push('number');
    }
    else {
      window.alert("Your password will NOT include numbers.")
    }

  // automatically set password to use symbols if all other character types are false
    if (confirmUpper === false && confirmLower === false && confirmNumber === false) {
        window.alert("Your password will only include symbols.")
        charactersAllowed.push('symbol');
    }
    else {
      var confirmSymbol = confirm("Would you like to use symbols?")
      if (confirmSymbol) {
        window.alert("Your password will include symbols.")
        charactersAllowed.push('symbol');
      }
      else {
        window.alert("Your password will NOT include symbols.")
      }
    }
  }

  // password character array
 var charactersAllowed = [];
 console.log(charactersAllowed);

// function to generate random uppercase letter
 function randomUpper() {
  var randomString = "";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for(var i, i = 0; i < uppercase.length; i++){
    randomString += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  }
  return randomString
}

// function to generate random lowercase letter
var randomLower = function(){
  var randomString = "";
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  for(var i, i = 0; i < lowercase.length; i++){
    randomString += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  }
  return randomString
}

// function to generate random number
var randomNumber = function(){
  var randomString = "";
  var number = "1234567890"
  for(var i, i = 0; i < number.length; i++){
    randomString += number.charAt(Math.floor(Math.random() * number.length));
  }
  return randomString
}

// function to generate random symbol
var randomSymbol = function(){
  var randomString = "";
  var symbol = "!@#$%^&*"
  for(var i, i = 0; i < symbol.length; i++){
    randomString += symbol.charAt(Math.floor(Math.random() * symbol.length));
  }
  return randomString
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}