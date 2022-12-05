class Ninja {
  constructor(name, health, speed, strength) {
    this.name ;
    this.health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`${this.name}`);
    return this;
  }
  showStats() {
    console.log(`Your name is ${this.name} and its health ${this.health} and its speed 
        is ${this.speed}and its strength is ${this.strength}`);
    return this;
  }
  drinkSake() {
    console.log(`${this.name} drank sake.`);
    this.health += 10;
    return this;
  }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
