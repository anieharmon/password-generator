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
 for (let index = 0; index < pwlength; index++) {
  var password = ""
 
 if(pwchar === true&&index<pwlength) {
  pwarray.push(character) 
  index = index + 1
 }
 else {
  console.log(false)}

 if(pwnumber === true&&index<pwlength) {
  pwarray.push(number)
  index = index + 1
 }

 if(pwlower === true&&index<pwlength) {
  pwarray.push(loweralpha)}
  index = index + 1

 if(pwupper === true&&index<pwlength) {
  pwarray.push(upperalpha)
  index = index + 1
 }

 }
 console.log(pwarray)
 var brownie = pwarray.join("")

 console.log(brownie)

}
for (let i = 0; i < pwlength; i++) {
  if (pwchar === true && i < pwlength) {
    brownie += character[Math.floor(Math.random() * character.length)];
    i++;
  }
  if (pwnumber === true && i < pwlength) {
    brownie += number[Math.floor(Math.random() * number.length)];
    i++;
  }
  if (pwlower === true && i < pwlength) {
    brownie += loweralpha[Math.floor(Math.random() * loweralpha.length)];
    i++;
  }
  if (pwupper === true && i < pwlength) {
    brownie += upperalpha[Math.floor(Math.random() * upperalpha.length)];
    i++;
  }
}

// return the generated password
return brownie;

// Write password to the #password input
function writebrownie() {
  var brownie = generatePassword();
  var brownieText = document.querySelector("#password");
  brownieText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


