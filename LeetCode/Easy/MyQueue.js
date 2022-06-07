var MyQueue = function() {
    this.head = 0;
    this.tail = 0;
    this.que = {};
};



/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if( !this.tail ) {
    this.que[this.head] = x
    this.tail++
  } else {
    this.que[this.tail] = x
    this.tail++
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // removes element from front of que and returns it
  // need to check if this.que is empty
  const firstElement = this.que[this.head]
  if(this.que[this.head]) {
    delete this.que[this.head]
    this.head++
  }
  return firstElement


};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.que[this.head]

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.tail - this.head === 0

};

module.exports = {
  MyQueue
}

var obj = new MyQueue()
console.log('obj =', obj)
obj.push(11)
obj.push(12)
obj.push(13)
obj.pop()
obj.push(14)
obj.pop()
obj.pop()
obj.pop()
obj.pop()
console.log('obj after push =', obj)
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */