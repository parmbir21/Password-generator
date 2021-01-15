// Assignment Code
var generateBtn = document.querySelector("#generate");

function questions() {
   //Asking multiple prompts (after they click the button) for how someone would like their password generated
   var length = prompt("How many characters would you like your password to be? \n(between 8 and 128 inclusive)");
   if (length < 8) {
     alert('The password must be at least 8 characters!');
   return;
   }
   if (length > 128) {
     alert('The password must be less than 128 characters!');
   return;
   }

 var lower = confirm("Would you like to include lowercase characters?");
 var upper = confirm("Would you like uppercase letters in your password?");
 var number = confirm("Would you like to include numeric characters in your password?");
 var symbol = confirm("Would you like special characters/symbols included your password?");
   if (!lower && !upper && !number && !symbol) {
     alert("Your password must contain at least one lowercase, uppercase, numeric, or special character");
   return;
   }

   var answers = {
     passwordLength: length,
     lowerCase: lower,
     upperCase: upper,
     numeric: number,
     specialChar: symbol
   }
   return answers;
}

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.nodeValue = password;

}

function generatePassword() {
  var answers = questions();
  console.log(answers)
  console.log(answers.passwordLength)

  //Generate random characters depending on which you selected
  var passwordPool =[];
  console.log(passwordPool)
  if (answers.lowerCase) {
    for (i = 0; i < 26; i++) {
    passwordPool.push(getRandomLower());
    }
  }
  if (answers.upperCase) {
    for (i = 0; i < 26; i++) {
    passwordPool.push(getRandomUpper());
    }
  }
  if (answers.numeric) {
    for (i = 0; i < 10; i++) {
    passwordPool.push(getRandomNumber());
    }
  }
  if (answers.specialChar) {
    for (i = 0; i < 30; i++) {
    passwordPool.push(getRandomSymbol());
    }
  }

  //Creating the password of the desired length
  var arrayPassword = [];
    for (i = 0; i < answers.passwordLength; i++) {
    arrayPassword.push(passwordPool[Math.floor(Math.random() * passwordPool.length)]);
  }
  console.log(arrayPassword)

  var finalPassword = arrayPassword.join('');
  console.log(finalPassword)

  //alert(finalPassword)
  //Display the password in the text box
  document.getElementById("password").innerHTML = finalPassword

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Generate a random number and use that corresponding number from character code to generate a random lower case letter (a-z) (https://net-comber.com/charset.html)
function getRandomLower () {
  return String.fromCharCode(
   (Math.floor(Math.random() * 26) + 97)
  );
}

//Same as the lower case generator except it is for upper case letters (A-Z)
function getRandomUpper () {
  return String.fromCharCode(
   (Math.floor(Math.random() * 26) + 65)
  );
}

//Same as the letter generators except for numbers (0-9)
function getRandomNumber () {
  return String.fromCharCode(
   (Math.floor(Math.random() * 10) + 48)
  );
}

//Generate symbols from a list of symbols
function getRandomSymbol () {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
