const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  _root = null;

  root() {
    //  throw new NotImplementedError('Not implemented');
    return this._root;
  }
  add_node(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.add_node(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.add_node(node.right, newNode);
    }
  }
  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const node = new Node(data);
    if (this._root === null) {
      this._root = node;
    } else this.add_node(this._root, node);
  }

  has(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (this.find(data) === null) return false;
    else return true;
  }
  search(x, k) {
    if (x === null || k === x.data) return x;
    if (k < x.data) return this.search(x.left, k);
    else return this.search(x.right, k);
  }
  find(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.search(this._root, data);
  }

  remove(data) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.delete(this._root, data);
  }

  min() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let node = this._root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let node = this._root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
  minimum(x) {
    if (x.left === null) return x;
    return this.minimum(x.left);
  }
  delete(rt, z) {
    if (rt === null) return root;
    if (z < rt.data) rt.left = this.delete(rt.left, z);
    else if (z > rt.data) rt.right = this.delete(rt.right, z);
    else if (rt.left !== null && rt.right !== null) {
      rt.data = this.minimum(rt.right).data;
      rt.right = this.delete(rt.right, rt.data);
    } else if (rt.left !== null) rt = rt.left;
    else if (rt.right !== null) rt = rt.right;
    else rt = null;
    return rt;
  }

}

module.exports = {
  BinarySearchTree
};
