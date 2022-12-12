let wordsArray = ["chair", "table", "beach", "dream", "drive", "after", "admit", "earth", "image", "brown", "mouse", "house", "water", "drink"];


let word = wordsArray[ (Math.floor(Math.random() * wordsArray.length))];

alert ("Hi!, Welcome to the hangman game. Enter one by one a letter to guess the 5 letters word in English");

let hiddenWord = "-----"
let letter = prompt(
    "This is the word you have to find " + hiddenWord + "\nEnter a letter \n"+ word);
do{
    
    
    if (word.indexOf(letter) === -1) {
        letter = prompt ("The letter " + letter +" entered is not in the word, try again! " + hiddenWord + "\nEnter a new letter \n");
    } else {
        let i = word.indexOf(letter);
        if(i === 0) {
            hiddenWord = letter + hiddenWord.substring(1, hiddenWord.length);   // this is for the first letter to replace
        }else if (i === hiddenWord.length-1) {                                    // this is for the last letter to replace
            hiddenWord = hiddenWord.substring(0, hiddenWord.length-1) + letter;
        }else {
            hiddenWord = hiddenWord.substring(0, i)+ letter+hiddenWord.substring(i+1,hiddenWord.length);
    
        }
    
       
        letter = prompt ("well done, continue. " + hiddenWord + "\n Enter a letter \n");
    }
}while(hiddenWord != word);

alert ("Congratulations the word is " + word);



// check index for arrays, week 7 js functions part 2