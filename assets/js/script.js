var choiceArray = []; 
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var symbol = ['!','@','#','$','%','^','&','*'];
  

// function to get password length from user
var passwordLength = function() {
  var promptLength = parseInt(prompt('How many characters would you like your password to be? Enter a number between 1 and 128.'));
    // invalid input
    if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
      window.alert("Please enter a number between 1 and 128.")
      return passwordLength();
    } else {
      window.alert("Your password will be " + promptLength + " characters long.")
      // check password length
      console.log(promptLength)
      passwordCharacters();
    }
  return promptLength;
}


// function to get character types from user
var passwordCharacters = function() {

  // ask if user wants to include uppercase characters
  var confirmUpper = confirm("Would you like to use uppercase letters?");
    if (confirmUpper) {
      // add uppercase letters to array
      choiceArray.push(randomUpper);
      window.alert("Your password will include uppercase letters.")
    } else {
      window.alert("Your password will not include uppercase letters.")
    }
    // check to see if uppercase is true or false
    console.log(confirmUpper)

  // ask if user wants to include lowercase characters
  var confirmLower = confirm("Would you like to use lowercase letters?");
    if (confirmLower) {
      // add lowercase letters to array
      choiceArray.push(randomLower);
      window.alert("Your password will include lowercase letters.")
    }
    else {
      window.alert("Your password will not include lowercase letters.")
    }
    // check to see if lowercase is true or false
    console.log(confirmLower)
  
  // ask if user wants to include numbers
  var confirmNumber = confirm("Would you like to use numbers?");
    if (confirmNumber) {
      // add numbers to array
      choiceArray.push(randomNumber);
      window.alert("Your password will include numbers.")
    }
    else {
      window.alert("Your password will NOT include numbers.")
    }
    // check to see if number is true or false
    console.log(confirmNumber)

  // automatically set password to use symbols if all other character types are false
    if (confirmUpper === false && confirmLower === false && confirmNumber === false) {
        window.alert("Your password will only include symbols.")
    }
    else {
      var confirmSymbol = confirm("Would you like to use symbols?")
      if (confirmSymbol) {
        // add symbols to array
        choiceArray.push(randomSymbol);
        window.alert("Your password will include symbols.")
      }
      else {
        window.alert("Your password will NOT include symbols.")
      }
      // check to see if symbol is true or false
      console.log(confirmSymbol)
    }
  }
 
  // functions to generate random characters
  var randomUpper = function() {
   return uppercase[Math.floor(Math.random() * uppercase.length)];
  }
  
  // function to generate random lowercase letter
  var randomLower = function(){
    return lowercase[Math.floor(Math.random() * lowercase.length)];
  }
  
  // function to generate random number
  var randomNumber = function(){
    return number[Math.floor(Math.random() * number.length)];
  }
  
  // function to generate random symbol
  var randomSymbol = function(){
    return symbol[Math.floor(Math.random() * symbol.length)];
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}