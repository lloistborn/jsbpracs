"use strict"

class BinarySearchTree {
	constructor(value) {
		this.value = value;
		this.leftChild = null;
		this.rightChild = null;
	}

	insertNode(value) {

		if (value <= this.value && this.leftChild) {
			this.leftChild.insertNode(value);
		} else if (value <= this.value) {
			this.leftChild = new BinarySearchTree(value);
		} else if (value > this.value && this.rightChild) {
			this.rightChild.insertNode(value);
		} else {
			this.rightChild = new BinarySearchTree(value);
		}

		return this;
	}

	findNode(value) {
		if (value < this.value && this.leftChild) {
			return this.leftChild.findNode(value);
		} else if (value > this.value && this.rightChild) {
			return this.rightChild.findNode(value);
		}

		return value == this.value;
	}
}

(function() {

	let bst = new BinarySearchTree(15);

	bst.insertNode(10);
	bst.insertNode(9);

	bst.findNode(9); // true

	console.log(JSON.stringify(bst, null, 4)); // final tree hierarchy
})();