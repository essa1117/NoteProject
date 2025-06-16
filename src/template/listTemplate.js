"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listTemplate = /** @class */ (function () {
    function listTemplate() {
        this.cont = document.getElementById('note-container'); //*********************/
    }
    listTemplate.prototype.clear = function () {
        this.cont.innerHTML = '';
    };
    listTemplate.prototype.render = function (fulllist) {
        var _this = this;
        this.clear();
        fulllist.list.forEach(function (object) {
            var note = document.createElement('DIV');
            note.className = 'note';
            note.classList.add(object.color);
            var clickArea = document.createElement('DIV');
            clickArea.className = 'click-area';
            clickArea.id = 'clickArea';
            var noteTitle = document.createElement('h3');
            noteTitle.innerHTML = object.title;
            var noteText = document.createElement('p');
            noteText.innerHTML = object.text;
            clickArea.addEventListener('click', function () {
                if (!note.classList.contains('selected')) {
                    note.classList.add('selected');
                    var overlay = document.getElementById('overlay');
                    overlay.classList.add('blure');
                    noteTitle.setAttribute('contenteditable', 'true');
                    noteText.setAttribute('contenteditable', 'true');
                }
            });
            noteTitle.addEventListener('click', function () {
                if (!note.classList.contains('selected')) {
                    note.classList.add('selected');
                    var overlay = document.getElementById('overlay');
                    overlay.classList.add('blure');
                    noteTitle.setAttribute('contenteditable', 'true');
                    noteText.setAttribute('contenteditable', 'true');
                }
            });
            noteText.addEventListener('click', function () {
                if (!note.classList.contains('selected')) {
                    note.classList.add('selected');
                    var overlay = document.getElementById('overlay');
                    overlay.classList.add('blure');
                    noteTitle.setAttribute('contenteditable', 'true');
                    noteText.setAttribute('contenteditable', 'true');
                }
            });
            noteTitle.addEventListener('focusout', function () {
                object.title = noteTitle.innerText;
                fulllist.save();
            });
            noteText.addEventListener('focusout', function () {
                object.text = noteText.innerText;
                fulllist.save();
            });
            var x = document.createElement('i');
            x.classList.add("fa-solid", "fa-circle-xmark", 'x');
            x.id = object.id.toString();
            x.addEventListener('click', function () {
                note.classList.remove('selected');
                var overlay = document.getElementById('overlay');
                overlay.classList.remove('blure');
            });
            var iFav = document.createElement('i');
            iFav.classList.add("fa-regular", "fa-bookmark", "bookmark");
            iFav.id = 'fav';
            if (object.fav == true) {
                iFav.classList.add('fav');
            }
            else {
                iFav.classList.remove('fav');
            }
            iFav.addEventListener('click', function () {
                fulllist.list[fulllist.list.indexOf(object)].fav = !fulllist.list[fulllist.list.indexOf(object)].fav;
                fulllist.save();
                iFav.classList.toggle('fav');
            });
            var iDel = document.createElement('i');
            iDel.classList.add("fa-solid", "fa-trash", "del");
            iDel.id = object.id.toString();
            iDel.addEventListener('click', function () {
                fulllist.removeItem(object.id);
                _this.render(fulllist);
            });
            note.append(clickArea);
            note.append(iFav);
            note.append(iDel);
            note.append(noteTitle);
            note.append(noteText);
            note.append(x);
            _this.cont.append(note);
        });
    };
    listTemplate.prototype.renderFilter = function (fulllist) {
        var _this = this;
        console.log('renderfilter');
        fulllist.list = fulllist.list.filter(function (item) { return item.fav === true; });
        console.log(fulllist.list);
        fulllist.list.forEach(function (object) {
            var note = document.createElement('DIV');
            note.className = 'note';
            note.classList.add(object.color);
            note.addEventListener('click', function () {
                note.classList.add('selected');
            });
            var x = document.createElement('i');
            x.classList.add("fa-solid", "fa-circle-xmark", 'x');
            x.id = object.id.toString();
            x.addEventListener('click', function () {
                note.classList.remove('selected');
            });
            var iFav = document.createElement('i');
            iFav.classList.add("fa-regular", "fa-bookmark", "bookmark");
            iFav.id = 'fav';
            if (object.fav == true) {
                iFav.classList.add('fav');
            }
            else {
                iFav.classList.remove('fav');
            }
            iFav.addEventListener('click', function () {
                fulllist.list[fulllist.list.indexOf(object)].fav = !fulllist.list[fulllist.list.indexOf(object)].fav;
                fulllist.save();
                iFav.classList.toggle('fav');
            });
            var iDel = document.createElement('i');
            iDel.classList.add("fa-solid", "fa-trash", "del");
            iDel.id = object.id.toString();
            iDel.addEventListener('click', function () {
                fulllist.removeItem(object.id);
                _this.renderFilter(fulllist);
            });
            var noteTitle = document.createElement('h3');
            noteTitle.innerHTML = object.title;
            var noteText = document.createElement('p');
            noteText.innerHTML = object.text;
            note.append(x);
            note.append(iFav);
            note.append(iDel);
            note.append(noteTitle);
            note.append(noteText);
            _this.cont.append(note);
        });
    };
    listTemplate.instance = new listTemplate();
    return listTemplate;
}());
exports.default = listTemplate;
