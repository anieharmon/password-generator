// Assignment Code


var generateBtn = document.querySelector("#generate");

console.log(generateBtn)
function generatePassword(event) {

  event.preventDefault()
  var number = "0123456789";
  var character = "!%&,*+-./<>?~";
  var loweralpha = "abcdefghijklmnopqrstuvwxyz";
  var upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pwarray = [];
  var pwlength = parseInt(prompt("How long do you want your password? Choose between 8 and 128", "8"));
  console.log(pwlength)
  // if (pwlength < 8) {
  //   console.log("This is less than 8. Try again.");
  // }
  // if (pwlength > 128) {
  //   console.log("This is bigger than 128. Try again.");
  // }

  var pwchar = window.confirm("Do you want a special character in your password?");
  var pwnumber = window.confirm("Do you want a number in your password?");
  var pwlower = window.confirm("Do you want a lower case letter in your password?");
  var pwupper = window.confirm("Do you want an upper case letter in your password?");
  //for (let i = 0; i < pwlength; i++) {


  if (pwchar === true) {
    pwarray.push(character)
    // pwarray = pwarray.concat(character);
    //i = i + 1
  }


  if (pwnumber === true) {
    pwarray.push(number)
    //  pwarray = pwarray.concat(number);
    //  i = i + 1
  }

  if (pwlower === true) {
    pwarray.push(loweralpha)
  }
  //pwarray = pwarray.concat(loweralpha);
  //i = i + 1

  if (pwupper === true) {
    pwarray.push(upperalpha)
    //pwarray = pwarray.concat(upperalpha);
    //i = i + 1
  }

  //}
  //console.log(pwarray)
  var brownie = pwarray.join("")

  console.log(brownie)


  if (pwlength >= 8 && pwlength <= 128) {
    var password = ""
    for (let i = 0; i < pwlength; i++) {
      password += brownie.charAt(Math.floor(Math.random() * brownie.length));
    }
    // if (pwnumber === true && i < pwlength) {
    //   brownie += number.charAt(Math.floor(Math.random() * number.length));
    //   i++;
    // }
    // if (pwlower === true && i < pwlength) {
    //   brownie += loweralpha.charAt(Math.floor(Math.random() * loweralpha.length));
    //   i++;
    // }
    // if (pwupper === true && i < pwlength) {
    //   brownie += upperalpha.charAt(Math.floor(Math.random() * upperalpha.length));
    //   i++;
    // }
    return writebrownie(brownie)
  }
}
// return the generated password

// Write password to the #password input
function writebrownie(brownie) {
  //var brownie = generatePassword();
  var brownieText = document.querySelector("#password");
  brownieText.value = brownie;
  //return brownie;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writebrownie);

generateBtn.addEventListener("click", generatePassword);
