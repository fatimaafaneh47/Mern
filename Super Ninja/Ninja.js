class Ninja {
    constructor(name, health, speed, strength) {
      this.name ;
      this.health;
      this.speed = 3;
      this.strength = 3;
    }
    sayName() {
      console.log(`${this.constructor.name}`);
      return this;
    }
    showStats() {
      console.log(`Your name is ${this.constructor.name} and its health ${this.health} and its speed 
          is ${this.speed}and its strength is ${this.strength}`);
      return this;
    }
    drinkSake() {
      console.log(`${this.constructor.name} drank sake.`);
      this.health += 10;
      return this;
    }
  }
 

  class Sensei extends Ninja{
    constructor(wisdom,health,speed,strength) {
        super("fatima", "healthy", "200","strong");
        this.wisdom=10;
        this.health=200;
        this.speed=10;
        this.strength=10;
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log("hello");
    }

  }
  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom();
  superSensei.showStats();
  