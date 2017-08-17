'use strict';

(function(exports) {
  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.getNotes = function() {
    return this._notes;
  };

  NoteList.prototype.createNote = function (text) {
    var note = new Note(text);
    this._notes.push(note);
  };

  exports.NoteList = NoteList;
})(this);
