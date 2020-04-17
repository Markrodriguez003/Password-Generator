/* REFER TO HW ASSIGNMENT CODE  */


/* PASSWORD PIECES */
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+|}<>?";
var spacer = " ";

/* PASSWORD VAR */
var finalizedPass = "";

/* ELEMENT GRABBERS */
var btn = document.querySelector("#subBtn"); /*  Selects Submit Btn */
var pTxtArea = document.querySelector("#passTxtArea"); /* Selects text area for generated password output */
var copyBtn = document.querySelector("#copiedPass"); /* Selects btn for copying the password to clipboard  */
