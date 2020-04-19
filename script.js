
/* PASSWORD PIECES */
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+|}<>?";
var megaArr = [symbols, numbers, alphaUpper, alphaLower];

/* RANDOM NUMBER */
var randoNum;

var scrambledBank = [];

/* GENERATED PASSWORD VAR */
var finalizedPass = [];
var finalPassword;
/* NUMBER OF CHARACTERS USER WOULD LIKE */
var userOptionNum = 5; //DEFAULT


/* ELEMENT GRABBERS */
var errorMsg = document.querySelector("#optionFailure");    /* failure error text */
var successMsg = document.querySelector("#optionSuccessful"); /* Successful text */
var copyMsg = document.querySelector("#copySuccessful");  /* Copy successful text */
var sBtn = document.querySelector("#subBtn");             /* Selects Submit Btn */
var pTxtField = document.querySelector("#passTxtField");  /* Selects text area for generated password output */
/* var copyBtn = document.querySelector("#copiedPass"); */      /* Selects btn for copying the password to clipboard  */
var userChar = document.querySelector("#chars");
var minusChar = document.querySelector("#back");
var plusChar = document.querySelector("#forward");
var symsChktog = document.querySelector("#symsChk")       /* Selects "Symbols" toggle  */
var numsChktog = document.querySelector("#numsChk");      /* Selects "Numbers" toggle  */
var uppersChktog = document.querySelector("#uppersChk");  /* Selects "Uppercase Characters" toggle  */
var lowersChktog = document.querySelector("#lowersChk");  /* Selects "Lowercase Characters" toggle  */


/* ERROR PAGE */
function errorPage() {
    errorMsg.style = "display: block";
    successMsg.style = "display: none"; 
    pTxtField.innerHTML = "ERROR!";
}

/* INCREASES CHAR VALUE AND ENTERS IT INTO PASSWORD FIELD */
plusChar.addEventListener("click", function(){
    if(userOptionNum < 15){
        userOptionNum = userOptionNum + 1;
        userChar.textContent = userOptionNum;
      }
})

/* DECREASES CHAR VALUE AND ENTERS IT INTO PASSWORD FIELD */
minusChar.addEventListener("click", function(){
  if(userOptionNum > 5){
    userOptionNum = userOptionNum - 1;
    userChar.textContent = userOptionNum;
  }
})

/* WHEN USER CLICKS "Generate Password" BUTTON */
sBtn.addEventListener("click", function () {
    errorMsg.style = "display: none";
    successMsg.style = "display: none";
    pTxtField.placeholder = "";
  
    togValuesArr();
});

/* PUSHES OPTION TOGGLE VALUES INTO AN ARRAY AND CALLS and SENDS CORRECT ARRAY   */
function togValuesArr() {

    /* USER CHECKBOX CHOICE ARRAY */
    var userChkOptions = [symsChk.checked, numsChktog.checked, uppersChktog.checked, lowersChktog.checked];

    /* CHECK TO SEE IF USER SELECTED NONE OF THE OPTIONS */
    var userError = true;

    /*  for (var c = 0; c < numOfChars; c++) {
 
     } */
    /* WILL CYCLE THROUGH OPTIONS AND CALL FUNCTION TO PUSH RANDOM VALUE INTO FINAL PASS */
    for (var i = 0; i < userChkOptions.length; i++) {
        if (userChkOptions[i] === true) {
            userError = false;
            randomizer(megaArr[i]);
        } else;
        pushPassToField();
    }
    /* WILL CALL ERROR FUNCTION */
    if (userError === true) {
        errorPage();
        console.log("ERROR - Please select an option below before generating password!")
    }
   

}

var randomizer = (arr) => {

    /* Scrambles array */
    randoNum = Math.floor(Math.random() * arr.length);
   /*  console.log(`Random # choosen | BEFORE: ${randoNum}`); */
    finalizedPass.push(arr[randoNum]);
    /* console.log(`# Going in Array | BEFORE: ${finalizedPass}`); */
    
    /* Creates a bank of extra characters */
    for (var x = 0; x < 10; x++) {
        randoNum = Math.floor(Math.random() * 10);
        scrambledBank.push(arr[randoNum]);
     /*    console.log(`# Going in Bank Array | BEFORE: ${scrambledBank}`); */
    }
    passScrambler(userOptionNum);
}

function passScrambler(userOpNum) {
    console.log(`PASSWORD LENGTH BEFORE BANK INSERT: ${finalizedPass.length}`)
    for(var y = finalizedPass.length; y < userOpNum; y++ ){
        var r = Math.floor(Math.random() * userOpNum);
        finalizedPass.push(scrambledBank[r]);
         
    }

    var currentIndex = finalizedPass.length
    console.log(`PASSWORD LENGTH AFTER BANK INSERT: ${finalizedPass.length}`)
    var tmpVal;
    var randoIndex;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = finalizedPass[currentIndex];
        finalizedPass[currentIndex] = finalizedPass[randomIndex];
        finalizedPass[randomIndex] = temporaryValue;
    }
    console.log(`Scrambled Password: ${finalizedPass}`);
    console.log(`Scrambled Password length: ${finalizedPass.length -1}`);
    while (finalizedPass.length !== userOpNum){
        finalizedPass.pop();
    }
    console.log(`Scrambled Password: ${finalizedPass}`);
    pushPassToField();
}

function pushPassToField() {
     
    finalPassword = finalizedPass.join("");
    pTxtField.innerHTML = finalPassword;
    successMsg.style = "display: block";



}