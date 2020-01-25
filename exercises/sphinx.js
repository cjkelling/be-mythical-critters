class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle){
    if (this.riddles.length === 3){
      this.riddles.shift();
    }
    this.riddles.push(riddle);
  }

  attemptAnswer(guess){
    var correct = [];
    this.riddles.forEach(riddle => {
      if (riddle.answer === guess){
        var index = this.riddles.indexOf(riddle);
        correct.push(index);
      }
    });
    if(correct.length > 0){
      this.riddles.splice(correct, 1);
      if(this.riddles.length > 0){
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      }
      else{
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`;
      }
    }
    else{
      this.heroesEaten += 1;
    }
  }
}

module.exports = Sphinx;
