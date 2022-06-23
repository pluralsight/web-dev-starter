//just goofing off with this one... could have used Array.prototype.push/pop but wanted to make my own for fun.

var MinStack = function() {
  this.stack = []
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
let i = 0;
  while(this.stack[i] !== undefined) {
    i++;
  }
  this.stack[i] = val
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
let i = 0;
let result = []
while (this.stack[i] !== undefined) {
  i++
}
for ( let j = 0; j < i - 1; j++ ) {
  result.push(this.stack[j])
}
this.stack = result

};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
debugger
let i = 0;
while ( this.stack[i] !== undefined ) {
  i++
}
return this.stack[i - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
if (!this.stack.length) {return this.stack}
let i = 1;
let min = this.stack[0]
while ( this.stack[i] !== undefined ) {
  if ( this.stack[i] < min) {
    min = this.stack[i]
  }
  i++;
}
return min
};

var obj = new MinStack()
obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)
obj.push(5)
console.log(obj.getMin())
/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*
* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.

*/