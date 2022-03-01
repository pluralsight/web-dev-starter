var Grub = function(age, color, food) {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};
Grub.prototype.eat = function () {
}


var Bee = function () {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

}

Bee.prototype = Object.create(Grub.prototype)
Bee.prototype.constructor = Bee;


var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
}

var ForagerBee = function() {
  Bee.call(this)
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype)
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (val) {
  this.treasureChest.push(val)
}







var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey'

};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype)
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function () {
  return "I am too old, let me play cards instead"
}
RetiredForagerBee.prototype.gamble = function (val) {
  this.treasureChest.push(val)
}