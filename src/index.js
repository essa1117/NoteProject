"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var listTemplate_js_1 = require("./template/listTemplate.js");
var item_js_1 = require("./models/item.js");
var fullList_js_1 = require("./models/fullList.js");
var write = document.getElementById('write');
var titleInput = document.getElementById('title-input');
var textInput = document.getElementById('text-input');
var button = document.getElementById('filter');
var startIcon = document.getElementById('add-icone');
//Functions
function randomColor() {
    if (fullList_js_1.default.instance.list.length != 0) {
        if (fullList_js_1.default.instance.list[0].color == 'red') {
            var colors = ['yellow', 'navy'];
            var i = Math.floor(Math.random() * 2);
            return 'yellow';
        }
        else if (fullList_js_1.default.instance.list[0].color == 'yellow') {
            var colors = ['red', 'navy'];
            var i = Math.floor(Math.random() * 2);
            return 'navy';
        }
        else {
            var colors = ['yellow', 'red'];
            var i = Math.floor(Math.random() * 2);
            return 'red';
        }
    }
    else {
        var colors = ['navy', 'yellow', 'red'];
        var i = Math.floor(Math.random() * 3);
        return colors[i];
    }
}
function startInsert() {
    write === null || write === void 0 ? void 0 : write.classList.add('show');
    startIcon.classList.add('hide');
}
function getid() {
    if (fullList_js_1.default.instance.list.length != 0) {
        console.log(fullList_js_1.default.instance.list[0]);
        return (fullList_js_1.default.instance.list[0].id) + 1;
    }
    else
        console.log('0');
    return 0;
}
function insertNote() {
    if (titleInput.value == '' || textInput.value == '') {
        alert('insert title and text');
    }
    else {
        fullList_js_1.default.instance.addItem(new item_js_1.default(getid(), titleInput.value.trim(), textInput.value.trim(), false, new Date, randomColor()));
        console.log("from add :".concat(fullList_js_1.default.instance.list.length));
        listTemplate_js_1.default.instance.render(fullList_js_1.default.instance);
        titleInput.value = '';
        textInput.value = '';
        textInput.style.height = "32px";
    }
}
function filtering() {
    button.classList.toggle('filtered');
    if (button.classList.contains('filtered')) {
        listTemplate_js_1.default.instance.clear();
        listTemplate_js_1.default.instance.renderFilter(fullList_js_1.default.instance);
        console.log('filtered');
    }
    else if (!button.classList.contains('filtered')) {
        listTemplate_js_1.default.instance.clear();
        fullList_js_1.default.instance.load();
        console.log(fullList_js_1.default.instance.list);
        listTemplate_js_1.default.instance.render(fullList_js_1.default.instance);
        console.log('un filtered');
    }
}
var initApp = function () {
    console.log('loaded');
    var fulllist = fullList_js_1.default.instance;
    var listtemplate = listTemplate_js_1.default.instance;
    fulllist.load();
    console.log("From inint---------------------------------".concat(fulllist.list));
    listtemplate.render(fulllist);
    console.log('loaded');
};
function textResize() {
}
//Event Handler
button === null || button === void 0 ? void 0 : button.addEventListener('click', filtering);
(_a = document.getElementById('text-box')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", startInsert);
(_b = document.getElementById('insert')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", insertNote);
textInput.addEventListener('keyup', function (e) {
    var scHeight = textInput.scrollHeight;
    textInput.height = scHeight;
    textInput.style.height = "".concat(scHeight, "px");
    console.log(textInput.style.height);
});
initApp();
