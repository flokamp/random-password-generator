var promptLength = [];
var choiceArr = []; 
var upperArr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];
var symbolArr = ['!','@','#','$','%','^','&','*'];

// function to get password length from user
var passwordPrompts = function() {
  var promptLength = parseInt(prompt('How many characters would you like your password to be? Enter a number between 1 and 128.'));
    // invalid input
    while ( isNaN(promptLength) || promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
      window.alert("Please enter a number between 1 and 128.")
      passwordPrompts();
    } 
      window.alert("Your password will be " + promptLength + " characters long.")
  
  // ask if user wants to include uppercase characters
  var confirmUpper = confirm("Would you like to use uppercase letters?");
    if (confirmUpper) {
      // add uppercase letters to array
      choiceArr = choiceArr.concat(upperArr);
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
      choiceArr = choiceArr.concat(lowerArr);
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
      choiceArr = choiceArr.concat(numberArr);
      window.alert("Your password will include numbers.")
    }
    else {
      window.alert("Your password will NOT include numbers.")
    }
    // check to see if number is true or false
    console.log(confirmNumber)

  // automatically set password to use symbols if all other character types are false
    if (confirmUpper === false && confirmLower === false && confirmNumber === false) {
        choiceArr = choiceArr.concat(symbolArr);
        window.alert("Your password will only include symbols.")
    }
    else {
      var confirmSymbol = confirm("Would you like to use symbols?")
      if (confirmSymbol) {
        // add symbols to array
        choiceArr = choiceArr.concat(symbolArr);
        window.alert("Your password will include symbols.")
      }
      else {
        window.alert("Your password will NOT include symbols.")
      }
      // check to see if symbol is true or false
      console.log(confirmSymbol)
    }
    return choiceArr;
}



// function to generate password using chosen characters
function generatePassword() {
  var password= "";
  for(var i = 0; i < promptLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomCharacter];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptsExist = passwordPrompts();

  if (promptsExist) {
   var newPassword = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);