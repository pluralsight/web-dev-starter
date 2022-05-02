/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, obj) {
  func.call(obj)
};


// var alice = {
//     name: 'alice',
//     shout: function(){
//       alert(this.name);
//     }
//   }
//var boundShout = bind(alice.shout, alice);
//boundShout(); // alerts 'alice'
//boundShout = bind(alice.shout, {name: 'bob'});
//boundShout(); // alerts 'bob'






/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(context) {
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  var func = this;
  return function () {
    var allArgs = bindArgs.concat(arguments)
    return func.apply(context, allArgs);
  }
};

//if original function accepts arguments, our bound function must also accept arguments


var alice = {
   name: 'alice',
   shout: function(){
     alert(this.name);
   }
 }
//var boundShout = alice.shout.bind(alice);
//boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
boundShout(); // alerts 'bob'
