"use strict";

class BinaryTree {
	
	constructor(value) {
		this.value = value;
		this.leftChild = null;
		this.rightChild = null;
	}

	insertLeft(value) {
		if (this.leftChild == null) {
			this.leftChild = new BinaryTree(value);
		} else {
			let newNode = new BinaryTree(value);
			newNode.leftChild = this.leftChild;
			this.leftChild = newNode;
		}

		return this;
	}

	insertRight(value) {
		if (this.rightChild == null) {
			this.rightChild = new BinaryTree(value);
		} else {
			let newNode = new BinaryTree(value);
			newNode.rightChild = newNode;
			this.rightChild = newNode;
		}

		return this;
	}
}

(function() {

	let tree_a = new BinaryTree('a');
	tree_a.insertLeft('b');
	tree_a.insertRight('c');
	tree_a.insertLeft('e');
	console.log(JSON.stringify(tree_a, null, 4));

	let tree_b = tree_a.leftChild;
	tree_b.insertRight('d');
	console.log(JSON.stringify(tree_b, null, 4));

})();