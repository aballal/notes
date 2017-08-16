'use strict';

(function(exports){
  function NoteController(noteList){
    this._noteList = noteList;
    this._noteListView = new NoteListView(this._noteList);
  };

  NoteController.prototype.insertHTMLIntoApp = function() {
    var htmlView = this._noteListView.convertToHTMLView();
    document.getElementById('app').innerHTML = htmlView;
  };

  exports.NoteController = NoteController;
})(this);
