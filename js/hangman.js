
const WORDSARRAY = ["cheer", "table", "beach", "green", "drive", "hello", "admit", "earth", "image", "brown", "mouse", "house", "water", "drink"];

const WORD = WORDSARRAY[ (Math.floor(Math.random() * WORDSARRAY.length))];

alert ("Hi!, Welcome to the hangman game. Enter one by one a letter to guess the 5 letters-word in English");

let hiddenWord = "-----";
let letter;
let lettersEntered = [];    // new array for the letters entered, will add one by one in the game
let message;
let flag = false;   // boolean to aply to the letter entered is in the word or not
let i = 10; 

while (i > 0) {

    if((flag === true) && (i != 10)){  // message if the letter is in the word
        message = "Well done, continue!\nYou have " + i + " tries to guess the word!\nEnter a letter: \n "+ hiddenWord + "\nThe letters already entered are: [" + lettersEntered + " ]\n";

    }else if((flag === false) && (i != 10)){  // message if the letter in NOT in the word.
        message = "That was wrong guess, continue!\nYou have " + i + " tries to guess the word!\nEnter a letter: \n "+ hiddenWord + "\nThe letters already entered are: [" + lettersEntered + " ]\n";

    }else{  // this will be the message to aply for first time in the game
        message = "You have " + i + " tries to guess the word!\nEnter a letter: \n "+ hiddenWord + "\nThe letters already entered are: [" + lettersEntered + " ]\n";

    }

    letter = prompt(message);  // show the message and wait for input from the user

      if (letter === null) {               // if press cancel the game will stop
        break;
        }

    lettersEntered.push(letter);  // add letter into the array

    let letterArray = [];    // 

    if(WORD.indexOf(letter) != -1) {     // check if the letter is in the word
        letterArray = findIndexes(letter, WORD);   // calling function that will return in the array of indexes
        flag = true;
    }
    else {                      //the letter is not in the word
        flag = false;
        i--;
        continue;
    }

    for(let j = 0; j < letterArray.length; j++){                     //replace the "-" with the entered letter
        hiddenWord = replaceAt(hiddenWord,letterArray[j],letter);
    }

    if(hiddenWord === WORD) {
        break;
    }

}

if(hiddenWord === WORD){                                                        // final conditional if the whole word is guess or not.
    alert("Well done! you guess it. \nThe word is: " + WORD);
}
else{
    alert("You lost! Better luck next time.\nThe word was: " + WORD);
}

function findIndexes(l, w){  // l for letter and w for word, two variables that i do not want to mix with the above already write.

    let arrayOfIndexes = [];

    for(let i = 0; i < w.length; i++) {
        if(l === w[i]){                     // if the letter is in the word will add its index in the array of indexes
            arrayOfIndexes.push(i);
        }
    }
    return arrayOfIndexes;
}

function replaceAt(hWord,index,letter){
    if(index === 0) {
        return  letter + hWord.substring(1, hWord.length);   // this is for the first letter to replace
    }else if (index === hWord.length-1) {                                    // this is for the last letter to replace
        return hWord.substring(0, hWord.length-1) + letter;
    }else {
        return hWord.substring(0, index) + letter+hWord.substring(index+1,hWord.length);   //this is for the middle letters to replace
    } 
}