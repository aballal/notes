'use strict';

(function(exports) {
  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.addNote = function(note) {
    this._notes.push(note);
  };

  NoteList.prototype.getNotes = function() {
    return this._notes;
  };

  NoteList.prototype.createNote = function (text) {
    var note = new Note(text);
    this.addNote(note);
  };

  exports.NoteList = NoteList;
})(this);
