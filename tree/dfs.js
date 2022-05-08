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

// const dfs = (root) => {
//   if (root === null) return;
//   console.log(root.value);
//   dfs(root.left);
//   dfs(root.right);
// }

const dfs = (root) => {
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current) {
      console.log(current.value);
      stack.push(current.right);
      stack.push(current.left);
    }
  }
}

dfs(root)
dfs(null)