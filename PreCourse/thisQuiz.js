



//debugger
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function () {
    console.log(arguments)
    console.log(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

//alice.sayHi(bob)
//alice.sayHi.call(bob)
//alice.sayHi.call(bob)
//alice.sayHi.bind(bob)
//setTimeout(alice.sayHi.bind(bob), 2000);
//setTimeout(alice.sayHi.bind(bob), 2000);
//setTimeout(alice.sayHi.call(bob), 2000);

//console.log(alice.sayHi.call(bob))




function sayHello() {
  //this.name = fef.name
  console.log(this.name + " says hello!");
  //console.log(arguments[0].name)
}
var alice = { name: "Alice" };

//sayHello(alice)
//sayHello.call(bob)




//debugger
//var x = 10;
//var puzzle = function (amount) {
//console.log(amount)
//this.ssh = amount
//console.log(this.ssh)
//this.x += amount;
//console.log(this.x)
//return this.x;
//};

//var result = 50 - puzzle(20);
//console.log(result)

// window.name = 'window'

// var alice = {
//   name: 'Alice',
//   greet: function () {
//     return "Hi I am " + this.name
//   }
// }

// var bob = {
//   name: 'Bob',
//   greet: alice.greet
// }

// var greet = alice.greet
// var result = greet()
// console.log(result)
// var obj1 = { x: 10 };

// var obj2 = Object.create(obj1);

// var obj3 = Object.create(obj2);

// // var result = obj3.x + 10;
// // console.log(result)
// var name = "Window";
// var alice = {
//   name: "Alice",
//   sayHi: function () {
//     alert(this.name + " says hi");
//   }
// };
// var bob = { name: "Bob" };

// setTimeout(alice.sayHi.bind(alice), 1000);










