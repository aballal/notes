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
    document.getElementById("app").innerHTML = note;
  };

  NoteController.prototype.getNoteFromUrl = function(hash) {
    var id = Number(hash.split("/")[1]);
    return this._noteList.getNotes()[id].getText();
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    noteController.showNote(noteController.getNoteFromUrl(window.location.hash));
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function () {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  NoteController.prototype.makeTextSubmitPostTextContent = function () {
    document
      .getElementById("text-submit")
      .addEventListener("click", function(clickEvent) {
        clickEvent.preventDefault();
        noteController.postTextContent(clickEvent);
    });
  };

  NoteController.prototype.postTextContent = function(clickEvent) {
    this._noteList.createNote(document.getElementById("text").value);
    noteController.insertURLIntoApp();
    noteController.clearTextContent();
  };

  NoteController.prototype.clearTextContent = function() {
    document.getElementById("text").value = "";
  };

  exports.NoteController = NoteController;
})(this);
