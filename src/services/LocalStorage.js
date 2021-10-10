class LocalStorage {
	constructor() {
		this.ls = window.localStorage;
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.clear = this.clear.bind(this);
		this.getItemByKey = this.getItemByKey.bind(this);
		this.updateKeyCount = this.updateKeyCount.bind(this);
		this.removeItems = this.removeItems.bind(this);
		this.count = 0;
	}

	async updateKeyCount(count) {
		this.count = count;
	}

	async getItemByKey(key) {
		if (this.ls.getItem(key)) {
			const items = JSON.parse(this.ls.getItem(key));
			await this.updateKeyCount(items.length);

			return JSON.parse(this.ls.getItem(key));
		}

		return [];
	}

	async addItem(key, value) {
		const items = await this.updateItem(key, value);

		return items;
	}

	async removeItem(key, value) {
		const items = await this.getItemByKey(key);

		if (items.length) {
			items.splice(items.indexOf(items.find(val => val.id === value.id)), 1);
			this.ls.setItem(key, JSON.stringify(items));
		}

		await this.updateKeyCount(items.length);

		return items;
	}

	async updateItem(key, value) {
		const items = await this.getItemByKey(key);

		if (items.length) {
			const item = items.find(val => val.id === value.id);

			if (item) {
				items.splice(items.indexOf(item), 1, value);
			} else {
				items.splice(items.length, 0, value);
			}

			this.ls.setItem(key, JSON.stringify(items));
		} else {
			items.splice(items.length, 0, value);
			this.ls.setItem(key, JSON.stringify(items));
		}
		await this.updateKeyCount(items.length);
		
		return items;
	}

	async reorderTodos(keys, todo1, todo2) {
		const items = await this.getItemByKey(keys);

		if (items.length) {
			const todo1Index = items.indexOf(items.find(val => val.id === todo1.id));
			const todo2Index = items.indexOf(items.find(val => val.id === todo2.id));

			items.splice(todo1Index, 1, todo2);
			items.splice(todo2Index, 1, todo1);

			this.ls.setItem(keys, JSON.stringify(items));
		}

		return items;
	}

	async clear() {
		this.ls.clear();

		await this.updateKeyCount(0);

		return [];
	}

	async removeItems(key) {
		this.ls.setItem(key, JSON.stringify([]));

		await this.updateKeyCount(0);

		return [];
	}

	get getCount() {
		return this.count;
	}
}

export default new LocalStorage();