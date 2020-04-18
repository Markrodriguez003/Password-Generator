/* REFER TO HW ASSIGNMENT CODE  */

/* PASSWORD PIECES */
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+|}<>?";
var passOptions = ["all", "num", "sym", "low", "up", "space", "word", "none"];
var spacer = " ";
var userCustomWord;

/* RANDOM NUMBER */
var randoNum;

/* USER CHECKBOX CHOICE ARRAY */
var userArr;

/* GENERATED PASSWORD VAR */
var finalizedPass = [];

/* ELEMENT GRABBERS */
var sBtn = document.querySelector("#subBtn");             /* Selects Submit Btn */
var pTxtField = document.querySelector("#passTxtField");  /* Selects text area for generated password output */
var copyBtn = document.querySelector("#copiedPass");      /* Selects btn for copying the password to clipboard  */
var symsChkBtn = document.querySelector("#symsChk");      /* Selects "Symbols" Checkbox  */
var numsChkBtn = document.querySelector("#numsChk");      /* Selects "Numbers" Checkbox  */
var spacesChkBtn = document.querySelector("#spacesChk");  /* Selects "Spaces" Checkbox  */
var uppersChkBtn = document.querySelector("#uppersChk");  /* Selects "Uppercase Characters" Checkbox  */
var lowersChkBtn = document.querySelector("#lowersChk");  /* Selects "Lowercase Characters" Checkbox  */

/* var randomizer = () => {
    setInterval(function () {
        randoNum = Math.floor(Math.random() * alphaLower.length);
        console.log(randoNum);
        finalizedPass.push(alphaLower[randoNum]);
        console.log(finalizedPass);
    }, 1000)
}
randomizer(); */
