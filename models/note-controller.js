'use strict';

(function(exports){
  function NoteController(noteList){
    this._noteList = noteList;
    this._noteListView = new NoteListView(this._noteList);
  };

  NoteController.prototype.insertHTMLIntoApp = function() {
    document.getElementById('app').innerHTML = this._noteListView.createULOfNotes();
  };

  NoteController.prototype.insertURLIntoApp = function() {
    document.getElementById('app').innerHTML = this._noteListView.createULOfNotes('url');
  };

  NoteController.prototype.showNote = function(note) {
    document
      .getElementById("app")
      .innerHTML = note;
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    var id = Number(location.hash.split("/")[1]);
    return this._noteList.getNotes()[id].getText();
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    noteController.showNote(noteController.getNoteFromUrl(window.location));
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function () {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  exports.NoteController = NoteController;
})(this);
