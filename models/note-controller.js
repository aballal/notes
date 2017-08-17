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
    document.getElementById('app').innerHTML = this._noteListView.createURLForEachNote();
  };

  exports.NoteController = NoteController;
})(this);
