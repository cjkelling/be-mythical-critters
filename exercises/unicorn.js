class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
     this.color = 'white';
    }
    else {
      this.color = color;
    }
  }

  isWhite(){
    if (this.color !== 'white'){
      return false;
    }
  }

  says(sparklying_stuff){
    return `**;* ${sparklying_stuff} *;**`
  }
}

module.exports = Unicorn;
