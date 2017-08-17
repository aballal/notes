(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.createULOfNotes = function(format) {
    format  = format || 'plain';
    var notes = this._noteList.getNotes();

    var ulView = "<ul>"
    for (var i = 0; i < notes.length; i++) {
      var id = notes[i].getID();
      var text = notes[i].getText().substr(0,20);
      if (format == 'url') text = this._createURLOfNote(id, text);
      ulView += "<li><div id='note-" + id + "'>" + text + "</div></li>";
    }
    ulView += "</ul>"

    return ulView;
  };

  NoteListView.prototype._createURLOfNote = function (id, text) {
    return "<a href=\"#notes/" + id + "\">" + text + "</a>";
  };

  exports.NoteListView = NoteListView;
})(this);
