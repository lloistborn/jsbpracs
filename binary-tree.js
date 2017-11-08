// https://medium.freecodecamp.org/all-you-need-to-know-about-tree-data-structures-bceacb85490c

function BinaryTree(value) {
	this.value = value;
	this.leftChild = null;
	this.rightChild = null;
}

BinaryTree.prototype.insertLeft = function(value) {
	if (this.leftChild == null) {
		this.leftChild = new BinaryTree(value);
	} else {
		let newNode = new BinaryTree(value);
		newNode.leftChild = this.leftChild;
		this.leftChild = newNode;
	}
}

BinaryTree.prototype.insertRight = function(value) {
	if (this.rightChild == null) {
		this.rightChild = new BinaryTree(value);
	} else {
		let newNode = new BinaryTree(value);
		newNode.rightChild = newNode;
		this.rightChild = newNode;
	}
}

let tree_a = new BinaryTree('a');
tree_a.insertLeft('b');
tree_a.insertRight('c');
tree_a.insertLeft('e');
console.log(JSON.stringify(tree_a, null, 4));

let tree_b = tree_a.leftChild;
tree_b.insertRight('d');
console.log(JSON.stringify(tree_b, null, 4));