var inquirer = require('inquirer');
var Hangman = require('./hangman')

var game = new Hangman(['hangman','puppy','cloud','ocean','whale','laptop'])
game.pickWord()

var questions = [
  {
    type: 'input',
    name: 'letter',
    message: "Guess a letter",

    when: function(answers) {
      return !game.winner() && !game.loser()
    }
  }
]

function ask() {
	console.log('your word: ',game.getWord().join(' '))
	inquirer.prompt(questions).then(function(answers) {
		if(game.winner()) {
			console.log('You win')
		} else if(game.loser()) {
			console.log('You lose')
		} else {
			game.guess(answers.letter)
			ask()
		}
	})
}

ask()