class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
  }

  noticesOgre(){
    var num = this.encounterCounter
    if (num !== 0 && num % 3 === 0){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports = Human;
