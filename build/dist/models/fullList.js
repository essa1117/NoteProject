import listItem from "./item.js";
class fullList {
    constructor(_list = []) {
        this._list = _list;
    }
    get list() {
        return this._list;
    }
    set list(l) {
        this._list = l;
    }
    load() {
        let storedList = localStorage.getItem('fullList');
        console.log(`list is ${storedList}`);
        if (storedList == null) {
            console.log('null');
        }
        else {
            fullList.instance.clearList();
            const parsedList = JSON.parse(String(storedList));
            parsedList.forEach(object => {
                const newListItem = new listItem(object._id, object._title, object._text, object._fav, object._date, object._color);
                fullList.instance.addItemLoad(newListItem);
            });
        }
    }
    save() {
        localStorage.setItem('fullList', JSON.stringify(this._list));
    }
    clearList() {
        this._list = [];
        this.save();
    }
    addItem(i) {
        this._list.unshift(i);
        this.save();
    }
    addItemLoad(i) {
        this._list.push(i);
        this.save();
    }
    removeItem(id) {
        this._list = this._list.filter(item => item.id != id);
        this.save();
        console.log('removed from list:', this._list);
    }
    editItem(id) {
        console.log(`Edited ${this.list.find((object) => object.id == id)}`);
    }
}
fullList.instance = new fullList();
export default fullList;
//# sourceMappingURL=fullList.js.map