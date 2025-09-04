let mainArray = []
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let characterQty = document.getElementById("character-qty");
let checkboxLetters = document.getElementById("checkbox-letters");
let checkboxNumbers = document.getElementById("checkbox-numbers");
let checkboxSymbols = document.getElementById("checkbox-symbols");
let errorMessage = document.getElementById("error-message")

//const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let includeLet = true;
let includeNum = true;
let includeSym = true;

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");


function generate() {
    mainArray = []
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    errorMessage.textContent = " "
    
    if (characterQty.value > 7 && characterQty.value < 21) {
        if (checkboxLetters.checked === true) {
            mainArray.push(...letters)
        }
        if (checkboxNumbers.checked === true) {
            mainArray.push(...numbers)
        }
        if (checkboxSymbols.checked === true) {
            mainArray.push(...symbols)
        }
        
        if (checkboxLetters.checked === false && checkboxNumbers.checked === false && checkboxSymbols.checked === false) {
            passwordOne.textContent = ""
            passwordTwo.textContent = ""
            errorMessage.textContent = "At least one checkbox must be checked"
            return 1
        }
        
        for (i = 0; i < characterQty.value; i++) {
            let randomNumOne = Math.floor( Math.random() * mainArray.length)
            let randomNumTwo = Math.floor( Math.random() * mainArray.length)  
            passwordOne.textContent += mainArray[randomNumOne]
            passwordTwo.textContent += mainArray[randomNumTwo]    
        }
    } else (errorMessage.textContent = "Number of characters must between 8 and 20")
}




