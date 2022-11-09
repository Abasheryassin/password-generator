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
function generatePassword(){
// Get user imput for length, uppercase, lowercase, number, and symbol
//let userPasswordLength = window.prompt("Please enter the character length you wish your password to be. (Must be between 8-128 characters");
//userPasswordLength = parseInt(userPasswordLength);

let userPasswordLength = userPromt();
let userPassword = userPrompt2(userPasswordLength);

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*-{}[]?/";

return userPassword;

//if (userPasswordLength < 8 || userPasswordLength > 128) {
//  alert("Please pick a number from 8 to 128");
//  generatePassword();
//  return;
//}

/*
let options = {
  userUpper: true,
  userLower: true,
  userNmuber: true,
  userSymbol: true
};
*/

// let userUpper = confirm("Would you like your password to contain any uppercase letters?");
// let userLower = confirm("Would you like your password to contain any lowercase letter?");
// let userNmuber = confirm("Would you like your password to contain any numbers?");
// let userSymbol = confirm("Would you like your password to contain any sympols?");

//if (!userUpper && !userLower && !userNmuber && !userSymbol) {
  //alert("Atleast one criteria must be selected");
  //generatePassword();
  //return;
//}

//for (let i = 0; (!userUpper && !userLower && !userNmuber && !userSymbol) = true; i++) {
//  alert("Atleast one criteria must be selected");
//}

//Generate random password
/*
let options = "";
let gPassword = "";

if (userUpper) {
  options = options.concat(upper);
}
if (userLower) {
  options = options.concat(lower);
}
if (userNmuber) {
  options = options.concat(number);
}
if (userSymbol) {
  options = options.concat(symbol);
}

for (i = 0; i < userPasswordLength; i++) {
  gPassword = gPassword.concat(options[Math.floor(Math.random() * options.length)]);
}
userPassword = gPassword;
return userPassword;
*/
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

function userPromt() {
  userPasswordLength = prompt("Please enter the character length you wish your password to be. (Must be between 8-128 characters");
  userPasswordLength = parseInt(userPasswordLength);

  for (let i = 0; (userPasswordLength < 8 || userPasswordLength > 128) === true; i++) {
    userPasswordLength = prompt("Please pick a number from 8 to 128");
    userPasswordLength = parseInt(userPasswordLength);
  }
  return userPasswordLength;
}

function userPrompt2() {
  let userUpper = confirm("Would you like your password to contain any uppercase letters?");
  let userLower = confirm("Would you like your password to contain any lowercase letter?");
  let userNmuber = confirm("Would you like your password to contain any numbers?");
  let userSymbol = confirm("Would you like your password to contain any sympols?");

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*-{}[]?/";

  let options = "";
  let gPassword = "";

  for (let i = 0; (!userUpper && !userLower && !userNmuber && !userSymbol) === true; i++) {
    alert("Atleast one criteria must be selected");
    userUpper = confirm("Would you like your password to contain any uppercase letters?");
    userLower = confirm("Would you like your password to contain any lowercase letter?");
    userNmuber = confirm("Would you like your password to contain any numbers?");
    userSymbol = confirm("Would you like your password to contain any sympols?");
    }  

  if (userUpper) {
    options = options.concat(upper);
  }
  if (userLower) {
    options = options.concat(lower);
  }
  if (userNmuber) {
    options = options.concat(number);
  }
  if (userSymbol) {
    options = options.concat(symbol);
  }

  for (i = 0; i < userPasswordLength; i++) {
    gPassword = gPassword.concat(options[Math.floor(Math.random() * options.length)]);
  }

return gPassword;
}