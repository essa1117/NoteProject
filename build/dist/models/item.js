export default class listItem {
    constructor(_id = 0, _title = '', _text = '', _fav = false, _date = new Date, _color = 'yellow') {
        this._id = _id;
        this._title = _title;
        this._text = _text;
        this._fav = _fav;
        this._date = _date;
        this._color = _color;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get text() {
        return this._text;
    }
    set text(text) {
        this._text = text;
    }
    get fav() {
        return this._fav;
    }
    set fav(fav) {
        this._fav = fav;
    }
    get date() {
        return this._date;
    }
    set date(date) {
        this._date = date;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}
//# sourceMappingURL=item.js.map