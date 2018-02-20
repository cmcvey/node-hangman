var Word = require('./word')
var MAX_MISSES = 10

function Hangman(words) {
  this.words = words
  this.misses = 0
  this.guesses = []
  this.word = null
}

Hangman.prototype = {

  pickWord() {
    this.setWord(this.words[Math.floor(Math.random() * this.words.length)])
  },

  getWord() {
  	return this.word.getWord()
  },

  setWord(word) {
    this.word = new Word(word)
  },

	loser() {
    return this.misses === MAX_MISSES
  },
 
  winner() {
    return this.word.allFlipped()
  },

  alreadyGuessed(letter) {
    return this.guesses.includes(letter)
  },
  // adds letter to guesses
  // if word has letter, loops through placeholder and replaces _ with letter where appropriate
  // else increment misses and return false
  guess(letter) {
    this.guesses.push(letter)

    if (this.word.flipLetter(letter)) {
      return true
    }
    this.misses++
    return false
  }
}

module.exports = Hangman