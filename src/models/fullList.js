"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_js_1 = require("./item.js");
var fullList = /** @class */ (function () {
    function fullList(_list) {
        if (_list === void 0) { _list = []; }
        this._list = _list;
    }
    Object.defineProperty(fullList.prototype, "list", {
        get: function () {
            return this._list;
        },
        set: function (l) {
            this._list = l;
        },
        enumerable: false,
        configurable: true
    });
    fullList.prototype.load = function () {
        var storedList = localStorage.getItem('fullList');
        console.log("list is ".concat(storedList));
        if (storedList == null) {
            console.log('null');
        }
        else {
            fullList.instance.clearList();
            var parsedList = JSON.parse(String(storedList));
            parsedList.forEach(function (object) {
                var newListItem = new item_js_1.default(object._id, object._title, object._text, object._fav, object._date, object._color);
                fullList.instance.addItemLoad(newListItem);
            });
        }
    };
    fullList.prototype.save = function () {
        localStorage.setItem('fullList', JSON.stringify(this._list));
    };
    fullList.prototype.clearList = function () {
        this._list = [];
        this.save();
    };
    fullList.prototype.addItem = function (i) {
        this._list.unshift(i);
        this.save();
    };
    fullList.prototype.addItemLoad = function (i) {
        this._list.push(i);
        this.save();
    };
    fullList.prototype.removeItem = function (id) {
        this._list = this._list.filter(function (item) { return item.id != id; });
        this.save();
        console.log('removed from list:', this._list);
    };
    fullList.prototype.editItem = function (id) {
        console.log("Edited ".concat(this.list.find(function (object) { return object.id == id; })));
    };
    fullList.instance = new fullList();
    return fullList;
}());
exports.default = fullList;
