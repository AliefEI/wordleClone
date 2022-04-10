/*
Things to do 
- have ability to accept input via button 
    - create input for entering letters --> connect keyboard to button 
    - create a way to erase letter 
    - create a way to check guesses 
- create 

*/
 
import {WORDS} from './words.js'

const numberOfGuesses = 6
let guessesRemaining = numberOfGuesses
let currentGuess = []
let nextLetter = 0
let randomWordGuess = WORDS[Math.floor(Math.random()*WORDS.length)]
console.log(randomWordGuess)


// function insertLetter (pressedKey){
//     if (nextLetter==)
// }