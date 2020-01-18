class Medusa {
  constructor(name, statues) {
    this.name = name;
    this.statues = [];
  }

  stare(victim){
    this.statues.push(victim);
    victim.stoned = true;
    if (this.statues.length > 3) {
      var person = this.statues.shift();
      person.stoned = false;
    }
  }
}

module.exports = Medusa;
