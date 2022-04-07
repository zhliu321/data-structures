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

    // insert - depth first traversal
    insert(val, target = null) {
        const node = new Node(val);
        const stack = [ this.root ];

        if (target === null) {
            const curr = this.root;
            this.root = node;
            this.root.left = curr;
            stack.pop();
        }

        while (stack.length > 0) {
            const curr = stack.pop();

            if (curr.val === target) {
                if (curr.left === null) curr.left = node;
                else if (curr.right === null) curr.right = node;
                break;
            }

            if (curr.right !== null) {
                stack.push(curr.right);
            }
            if (curr.left !== null) {
                stack.push(curr.left);
            }
        }
    }

    // print - depth first traversal
    // print() {
    //     const stack = [ this.root ];
    //     while (stack.length > 0) {
    //         const curr = stack.pop();
    //         console.log(curr.val);

    //         if (curr.right !== null) {
    //             stack.push(curr.right);
    //         }
    //         if (curr.left !== null) {
    //             stack.push(curr.left);
    //         }
    //     }
    // }

    // print - recursive df
    print() {
        this._print(this.root);
    }

    _print(curr) {
        if (curr === null) return;

        // pre-order - self, left, right
        console.log(curr.val);
        this._print(curr.left);
        this._print(curr.right);

        // post-order - left, right, self
        // this._print(curr.left);
        // this._print(curr.right);
        // console.log(curr.val);

        // // in-order - left, self, right
        // this._print(curr.left);
        // console.log(curr.val);
        // this._print(curr.right);
    }

    // contains - depth first
    contains(target) {
        const stack = [ this.root ];
        while (stack.length > 0) {
            const curr = stack.pop();
            if (curr.val === target) {
                return true;
            }

            if (curr.right !== null) {
                stack.push(curr.right);
            }
            if (curr.left !== null) {
                stack.push(curr.left);
            }
        }
        return false;
    }


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