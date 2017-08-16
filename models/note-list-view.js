(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.convertToHTMLView = function() {
    var htmlView = "<ul>"
    var notes = this._noteList.getNotes();
    //Change this to map later
    for (var i = 0; i < notes.length; i++) {
      htmlView += "<li><div>" + notes[i].getText().substr(0,20) + "</div></li>";
    }
    htmlView += "</ul>"
    return htmlView;
  };

  exports.NoteListView = NoteListView;
})(this);
