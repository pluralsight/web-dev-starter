


var x = 10;

function f () {
  x = x + 1;
  return x;
}

var obj = {
  func: f,
  g: f(),
  h: x,
};

obj.func();
var result = obj.g;
console.log(result)





//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(function() {
  alice.sayHi();
}, 1000);
//Alice says hi after one second


//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi, 1000);
//Window says hi after one second


//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);
//Alice says hi after one second




//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi(), 1000);
//Alice says hi immediately

//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(bob), 1000);
//bob says hi after one second


//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.call(bob), 1000);
//bob says hi immediately


//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

bob.sayHi = alice.sayHi

setTimeout(bob.sayHi, 1000);
//Window says hi after one second













//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };

var sayHi = alice.sayHi.bind(bob)

setTimeout(function () {
  window.sayHi()
}, 1000);
//Bob says hi after 1 second


//////////////////////////
var name = "Window";
var alice = {
  name: "Alice",
  sayHi: function() {
    alert(this.name + " says hi");
  }
};
var bob = { name: "Bob" };


alice.sayHi.bind(bob);

setTimeout(alice.sayHi(), 1000);
//Alice says hi immediately
*/



