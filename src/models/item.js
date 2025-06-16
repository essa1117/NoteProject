"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listItem = /** @class */ (function () {
    function listItem(_id, _title, _text, _fav, _date, _color) {
        if (_id === void 0) { _id = 0; }
        if (_title === void 0) { _title = ''; }
        if (_text === void 0) { _text = ''; }
        if (_fav === void 0) { _fav = false; }
        if (_date === void 0) { _date = new Date; }
        if (_color === void 0) { _color = 'yellow'; }
        this._id = _id;
        this._title = _title;
        this._text = _text;
        this._fav = _fav;
        this._date = _date;
        this._color = _color;
    }
    Object.defineProperty(listItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(listItem.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(listItem.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(listItem.prototype, "fav", {
        get: function () {
            return this._fav;
        },
        set: function (fav) {
            this._fav = fav;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(listItem.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (date) {
            this._date = date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(listItem.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    return listItem;
}());
exports.default = listItem;
