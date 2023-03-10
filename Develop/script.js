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
  pwarray.push(character) 
 }
 else {
  console.log(false)}

 if(pwnumber === true) {
  pwarray.push(number)
 }

 if(pwlower === true) {
  pwarray.push(loweralpha)}

 if(pwupper === true) {
  pwarray.push(upperalpha)
 }
  
 console.log(pwarray)
 var brownie = pwarray.join("")

 console.log(brownie)

 for (let index = 0; index < pwlength; index++) {
  var password = ""
 }
  
  
  
  
  
  
  
  
}


//var response prompt=("How many characters")

// finish the foor loop and pass password to write password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//a random seletection criteria/process
// return the pw