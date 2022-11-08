// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password function
function generatePassword() {
// Get user imput for length, uppercase, lowercase, number, and symbol
let userPassword = "";
let userPasswordLength = window.prompt("Please enter the character length you wish your password to be. (Must be between 8-128 characters");
userPasswordLength = parseInt(userPasswordLength);

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*-{}[]?/";

if (userPasswordLength < 8 || userPasswordLength > 128) {
  userPasswordLength = window.prompt("Please enter a number between 8 and 128");
}

let userUpper = window.confirm("Would you like your password to contain any uppercase letters?");
let userLower = window.confirm("Would you like your password to contain any lowercase letter?");
let userNmuber = window.confirm("Would you like your password to contain any numbers?");
let userSymbol = window.confirm("Would you like your password to contain any sympols?");

//Generate random password
let options = "";

if (userUpper){
  
}




return userPassword;
}

// Get random output for uppercae, lowercase, number, and symbol
/*
function upperRandom() {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
}
function lowerRandom() {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
}
function numberRandom() {
  let number = "0123456789";
  return number[Math.floor(Math.random() * number.length)];
}
function symbolRandom() {
  let symbol = "!@#$%^&*-{}[]?/";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
*/