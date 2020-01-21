class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }

  shoot(){
    if (this.cranky) {
      return 'NO!'
    }
    else if ( this.layingDown) {
      return 'NO!'
    }
    else {
      this.count += 1;
      if (this.count === 3) {
        this.cranky = true;
        this.count = 0;
      }
      return 'Twang!!!'
    }
  }

  run(){
    if ( this.layingDown) {
      return 'NO!'
    }
    else {
      this.count += 1;
      if (this.count === 3) {
        this.cranky = true;
        this.count = 0;
      }
      return 'Clop clop clop clop!!!'
    }
  }

  sleep(){
    if (this.standing) {
      return 'NO!'
    }
    else {
      this.cranky = false;
      return 'ZZZZ'
    }
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    if (this.layingDown) {
      return 'Not while I\'m laying down!'
    }
    else if (this.cranky === false) {
      this.cranky = true
    }
    else {
      this.cranky = false;
    }
  }
}

module.exports = Centaur;
