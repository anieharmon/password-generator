// Assignment Code
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var character = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", ",", ".", "?"];
var loweralpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperalpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pwarray = [];

var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
function generatePassword(){
  var pwlength =  window.prompt("How long do you want your password? Choose between 8 and 128","8");
  console.log(pwlength)
if (pwlength < 8) {
  console.log("This is less than 8. Try again.");
}
 if(pwlength > 128) {
  console.log("This is bigger than 128. Try again.");
 } 
  
 var pwchar = window.confirm("Do you want a special character in your password?");
 var pwnumber = window.confirm("Do you want a number in your password?");
 var pwlower = window.confirm("Do you want a lower case letter in your password?");
 var pwupper = window.confirm("Do you want an upper case letter in your password?");
 if(pwchar === true) {
  console.log(true)  
  var spcharacter = character.toString()
  pwarray.push(spcharacter) 
  console.log(pwarray)
 }
 else {
  console.log(false)}

 if(pwnumber === true) {
  console.log(true)
  var spnumber = number.toString()
  pwarray.push(spnumber)
  console.log(pwarray)
 }

 if(pwlower === true) {
  console.log(true)
  var splower = loweralpha.toString()
  pwarray.push(splower)
  console.log(pwarray)
 }

 if(pwupper === true) {
  console.log(true)
  var spupper = upperalpha.toString()
  pwarray.push(spupper)
  console.log(pwarray)
 }
  
  
  
  
  
  
  
  
  
}


//var response prompt=("How many characters")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//ask user how many characters they need
//do they want upper case or lower case letter
//numbers or special characters
//what characters to use? which letters do they want to use lower or upper
//a random seletection criteria/process
// return the pw