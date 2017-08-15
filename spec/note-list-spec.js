(function(exports) {
  function testNoteListHasAListOfNotes() {
    var note = new Note("JavaScript");
    var noteList = new NoteList;
    noteList.addNote(note);
    assert.isEqual(noteList.getNotes()[0], note);
  };
  testNoteListHasAListOfNotes();
})(this);

(function(exports) {
  function testNoteListCanCreateNotes() {
    var noteList = new NoteList;
    noteList.createNote("JavaScript");
    assert.isEqual(noteList.getNotes()[0].getText(), "JavaScript");
  };
  testNoteListCanCreateNotes();
})(this);
