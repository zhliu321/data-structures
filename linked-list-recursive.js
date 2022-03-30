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

  // Recursive append
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    this._append(val, this.head);
  }

  _append(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val);
      return;
    }

    this._append(val, curr.next);
  }

  // Recursive print
  print() {
    const output = this._print(this.head);
    console.log(output);
  }

  _print(curr) {
    if (curr === null) return '';
    return curr.val + '->' + this._print(curr.next);
  }

  // Recursive contains
  contains(target) {
    return this._contains(target, this.head);
  }

  _contains(target, curr) {
    if (curr === null) return false;
    if (curr.val === target) return true;
    return this._contains(target, curr.next);
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