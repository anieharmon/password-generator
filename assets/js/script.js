// Assignment Code

//this is linking the generate button in html to javascript
var generateBtn = document.querySelector("#generate");

console.log(generateBtn)
function generatePassword(event) {
// defining variables
  event.preventDefault()
  var number = "0123456789";
  var character = "!%&,*+-./<>?~";
  var loweralpha = "abcdefghijklmnopqrstuvwxyz";
  var upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pwarray = [];
  var pwlength = parseInt(prompt("How long do you want your password? Choose between 8 and 128", "8"));
  console.log(pwlength)

// defining confirm prompts
  var pwchar = window.confirm("Do you want a special character in your password?");
  var pwnumber = window.confirm("Do you want a number in your password?");
  var pwlower = window.confirm("Do you want a lower case letter in your password?");
  var pwupper = window.confirm("Do you want an upper case letter in your password?");


// defining what to do when the user pushes yes for all options
  if (pwchar === true) {
    pwarray.push(character)
  }


  if (pwnumber === true) {
    pwarray.push(number)
  }

  if (pwlower === true) {
    pwarray.push(loweralpha)
  }
 

  if (pwupper === true) {
    pwarray.push(upperalpha)
  }


  var brownie = pwarray.join("")

  console.log(brownie)

 //grabbing characters the user wanted in their password. Creating an array into a string
  if (pwlength >= 8 && pwlength <= 128) {
    var password = ""
    for (let i = 0; i < pwlength; i++) {
      password += brownie.charAt(Math.floor(Math.random() * brownie.length));
    }
    // passing password to write brownie function
    return writebrownie(password)
  } 
}

function writebrownie(password) {
  
  var brownieText = document.querySelector("#password");
  brownieText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
