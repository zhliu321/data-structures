class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // print - breadth first traversal
    print() {
        const queue = [ this.root ];
        while (queue.length > 0) {
            const curr = queue.shift();
            console.log(curr.val);

            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
    }

    // insert - breadth first traversal
    insert(val, target = null) {
        const node = new Node(val);
        const queue = [ this.root ];

        if (target === null) {
            const curr = this.root;
            this.root = node;
            this.root.left = curr;
            queue.shift();
        }

        while (queue.length > 0) {
            const curr = queue.shift();
            
            if (curr.val === target) {
                if (curr.left === null) curr.left = node;
                else if (curr.right === null) curr.right = node;
                break;
            }

            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }

        return this.root;
    }

    // contains - breadth first traversal
    contains(target) {
        const queue = [ this.root ];
        while (queue.length > 0) {
            const curr = queue.shift();

            if (curr.val === target) {
                return true;
            }

            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
        return false;
    }

    // sum - bf works for numbers tree
    // sum() {
    //     let sum = 0;
    //     const queue = [ this.root ];
    //     while (queue.length > 0) {
    //         const curr = queue.shift();
    //         sum += curr.val;
    //         if (curr.left !== null) {
    //             queue.push(curr.left);
    //         }
    //         if (curr.right !== null) {
    //             queue.push(curr.right);
    //         }
    //     }
    //     return sum;
    // }
}

// const tree = new BinaryTree();
// tree.insert('a');
// tree.insert('b', 'a');
// tree.insert('c', 'a');
// tree.insert('d', 'c');
// tree.insert('x');
// tree.print();

// console.log(tree.contains('a'));
// console.log(tree.contains('d'));
// console.log(tree.contains('x'));

// Assume tree only contains numbers, find sum
// const tree = new BinaryTree();
// tree.insert(3, null);
// tree.insert(2, 3);
// tree.insert(7, 3);
// tree.insert(4, 2);
// tree.insert(-2, 2);
// tree.insert(5, 7);
// console.log(tree.sum());

