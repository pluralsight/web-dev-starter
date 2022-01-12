function Counter() {

  var counter = 0;

  setTimeout( function () {
      var innerCounter = 0;
      counter += 1;
      alert("counter = " + counter);

      setTimeout( function () {
          counter += 1;
          innerCounter += 1;
          alert("counter = " + counter + ", innerCounter = " + innerCounter)
      }, 500);

  }, 1000);
};

Counter();



var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.increment()







function fun(input){
  console.log(input)
}

setTimeout(
  function(){
    fun('hi');
  }
,1000);

setTimeout(
  fun('hello')
, 1000);
