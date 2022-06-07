/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
   this.carPark = {
     '1': big,
     '2': medium,
     '3': small
   }
   //return [this.carPark[1], this.carPark[2], this.carPark[3]]

};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  console.log('carPark =', this.carPark, 'carType =', carType)
  if ( this.carPark[carType] > 0 ) {
    this.carPark[carType]--
    return true
  } else {
    return false
  }
};

var obj = new ParkingSystem(1, 1, 3)
console.log(obj)
console.log(obj.addCar(1))
console.log(obj.addCar(1))
console.log(obj.addCar(3))
console.log(obj)



module.exports = ParkingSystem


/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 *
 *
 * Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.


Input
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
Output
[null, true, true, false, false]

Explanation
ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.


0 <= big, medium, small <= 1000
carType is 1, 2, or 3
At most 1000 calls will be made to addCar


 */