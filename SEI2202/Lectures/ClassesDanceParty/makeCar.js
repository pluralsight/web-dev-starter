
//Parent class constructure
function makeCar(selectedColor) {
  var instance = {}
  instance.loc = 0;
  instance.color = selectedColor;
  instance.drive = function () {
    instance.log += 1;
  }
  return instance;
}

//Sub-class constructor
function makeTruck(selectedColor) {
  var instance = makeCar(selectedColor);
  instance.size = '12ft';

  //Overriding / shadowing
  instance.drive = function () {
    instance.loc += 0.5;
  }
  return instance;
}

//somewhere in the usage code

//Polymorphism
//We are essentially creating multiple forms of the same base class
//that share an interface
//'many forms', the ability
var car = makeCar('red');
var truck = makeTruck('green');

function gameDriver(vehicle) {
  vehicle.drive();
}
gameDriver(truck);
