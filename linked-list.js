class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add new node to end of list
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  }

  // Print all nodes
  print() {
    let str = '';
    let curr = this.head;
    while (curr !== null) {
      str += curr.val + '->';
      curr = curr.next;
    }
    console.log(str);
  }

  // Check if list contains a value
  contains(val) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }

  // Delete value if found in list
  remove(target) {
    let prev = null;
    let curr = this.head;
  
    // If target is head
    if (curr.val === target) {
      this.head = curr.next;
      curr = null;
    }

    while (curr !== null) {
      if (curr.val === target) {
        prev.next = curr.next;
      }
      prev = curr;
      curr = curr.next;
    }

    return this.head;
  }
}


// const list = new LinkedList();
// list.append('a');
// list.append('b');
// list.append('c');
// list.append('d');
// list.print();

// console.log(list.contains('a')); // true
// console.log(list.contains('b')); // true
// console.log(list.contains('c')); // true
// console.log(list.contains('d')); // true
// console.log(list.contains('z')); // false
// console.log(list.contains('x')); // false

// console.log(list.remove('a'));
// list.print();