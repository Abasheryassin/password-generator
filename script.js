// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*-{}[]?/";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword(){

  let userPasswordLength = lengthPrompt();
  console.log(userPasswordLength);
  if (userPasswordLength === undefined) {
    return;
  }
  let userPassword = criteriaPrompt(userPasswordLength);
  
  return userPassword;
}

//  Prompts for length of password

function lengthPrompt() {

  userPasswordLength = prompt("Please enter the character length you wish your password to be. (Must be between 8-128 characters");

  if (userPasswordLength === null) {
    return;
  }

  while (userPasswordLength < 8 || userPasswordLength > 128 || diget(userPasswordLength) != true) {
    if (userPasswordLength === null) {
      return;
    }
    userPasswordLength = prompt("Please pick a number from 8 to 128");
  }
  return userPasswordLength;
}

//  Get user imput for length, uppercase, lowercase, number, and symbol
//  Generate random password

function criteriaPrompt() {

  let userUpper = confirm("Would you like your password to contain any uppercase letters?");
  let userLower = confirm("Would you like your password to contain any lowercase letter?");
  let userNmuber = confirm("Would you like your password to contain any numbers?");
  let userSymbol = confirm("Would you like your password to contain any sympols?");
  let options = "";
  let gPassword = "";

  while (!userUpper && !userLower && !userNmuber && !userSymbol) {
    alert("Atleast one criteria must be selected");
    userUpper = confirm("Would you like your password to contain any uppercase letters?");
    userLower = confirm("Would you like your password to contain any lowercase letter?");
    userNmuber = confirm("Would you like your password to contain any numbers?");
    userSymbol = confirm("Would you like your password to contain any sympols?");
  }  

  if (userUpper) {
    options = options.concat(upper);
    gPassword = gPassword.concat(upper[Math.floor(Math.random() * upper.length)]);
  } if (userLower) {
    options = options.concat(lower);
    gPassword = gPassword.concat(lower[Math.floor(Math.random() * lower.length)]);
  } if (userNmuber) {
    options = options.concat(number);
    gPassword = gPassword.concat(number[Math.floor(Math.random() * number.length)]);
  } if (userSymbol) {
    options = options.concat(symbol);
    gPassword = gPassword.concat(symbol[Math.floor(Math.random() * symbol.length)]);
  }

  for (i = gPassword.length; i < userPasswordLength; i++) {
    gPassword = gPassword.concat(options[Math.floor(Math.random() * options.length)]);
  }

  let fgPassword = shuffle(gPassword);
  return fgPassword;
}
function diget(value) {
  return /^\d+$/.test(value);
}

function shuffle(value) {
    var a = value.split(""),
    n = a.length;

  for(var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}