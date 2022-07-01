

// reverse a linked list

//create a node

// class Node {
//   constructor(val) {
//     this.value = val
//     this.next = null
//   }
// }

class LLinkedList {
  constructor() {
    this.tail = null
    this.head = null
    this.length = 0;
  }

  push(val) {
    let node = new Node(val)

    // if there is no head, set head and tail to new node
    if (!this.head) {
      this.tail = node;
      this.head = node;
      this.length = 1;
    } else {
      // otherwise
        //set the current tail.next to node
        //set the tail to node
      this.tail.next = node
      this.tail = node;
      this.length++

    }

  }

  pop() {
    //if there is no node
    if (!this.head) {
      return null
    }

    // remove tail of linked list
    // iterate down the linked list
      // {} -> {} -> {} -> {}
      //
      console.log('this.value', this.head.value)
      while( !this.next ) {
        console.log(this.node.value)
        next = this.next
      }
  }


}


// var linky = new LinkedList
// linky.push(1)
// linky.push(2)
// linky.push(3)
// linky.pop()



// var node_a = new Node(1)
// node_a.next = new Node(2)
// node_a.next.next = new Node(3)
// node_a.next.next.next = new Node(4)
// console.log(node_a)