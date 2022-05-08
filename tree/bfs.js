class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const constructTree = () => {
  let a = new Node('a');
  let b = new Node('b');
  let c = new Node('c');
  let d = new Node('d');
  let e = new Node('e');
  let f = new Node('f');

  let root = a;
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  return root;
}

let root = constructTree();

const bfs = (root) => {
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current) {
      console.log(current.value);
      queue.push(current.left);
      queue.push(current.right);
    }
  }
}

bfs(root)