(function(exports) {
  var self;

  function NoteListView(noteList) {
    self = this;
    self._noteList = noteList;
  }

  NoteListView.prototype.createULOfNotes = function(format) {
    format  = format || 'plain';

    return '<ul>' + self._noteList.getNotes().map( function (note) {
      var text = note.getText().substr(0,20);
      if (format === 'url') text = self._createURLOfNote(note.getID(), text);
      return '<li><div>' + text + '</div></li>';
    }).join('') + '</ul>';
  };

  NoteListView.prototype._createURLOfNote = function (id, text) {
    return '<a id=\'note-' + id + '\' href="#notes/' + id + '">' + text + '</a>';
  };

  exports.NoteListView = NoteListView;
})(this);
