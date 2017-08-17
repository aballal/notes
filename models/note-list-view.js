(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.createULOfNotes = function() {
    var htmlView = "<ul>"
    var notes = this._noteList.getNotes();
    //Change this to map later
    for (var i = 0; i < notes.length; i++) {
      htmlView += "<li><div id='note-" + notes[i].getID() + "'>" + notes[i].getText().substr(0,20) + "</div></li>";
    }
    htmlView += "</ul>"
    return htmlView;
  };

  NoteListView.prototype.createURLForEachNote = function () {
    var urls = "";
    var notes = this._noteList.getNotes();
    //Change this to map later
    for (var i = 0; i < notes.length; i++) {
      urls += "<a href=\"#notes/" + notes[i].getID() + "\">" + notes[i].getText().substr(0,20) + "</a>";
    }
    return urls;
  };

  exports.NoteListView = NoteListView;
})(this);
