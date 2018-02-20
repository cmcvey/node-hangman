function Word(word) {
	this.word = word

	this.letters = word.split('').map(function(letter) {
		return {
			letter: letter,
			flipped: false
		}
	})
}

Word.prototype = {
	allFlipped() {
		return this.letters.every(function(letter) {
			return letter.flipped === true
		})
	},
	getWord() {
		return this.letters.map(function(letter) {
			if (letter.flipped) {
				return letter.letter
			}
			return '_'
		})
	},
	flipLetter(guess) {
		if (!this.word.includes(guess)) {
			return false
		}
		this.letters = this.letters.map(function(letter) {
			if (letter.letter === guess) {
				letter.flipped = true
			}
			return letter
		})
		return true
	},
}

module.exports = Word

