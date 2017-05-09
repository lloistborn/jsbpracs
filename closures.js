var basket = (() => {
	var items = [];

	return {
		addItem: () => {
			console.log("berhasil menambahkan");
		},
		removeItem: (index) => {
			console.log("index "+index+" berhasil dihapus");
		},
		multipleItem: (a, b) => {
			return a * b;
		}
	};
})();

basket.addItem();
basket.removeItem(100);
console.log(basket.multipleItem(100, 200));
