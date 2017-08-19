(function(exports) {
  var noteList;

  function beforeEach() {
    Note.resetLastUsedId();
    noteList = new NoteList;
  };

  function testNoteListCanBeCreated() {
    beforeEach();
    assert.isTrue(noteList);
  };

  function testNoteListCanCreateNotes() {
    beforeEach();
    noteList.createNote("JavaScript");
    assert.isEqual(noteList.getNotes()[0].getText(), "JavaScript");
    Note.resetLastUsedId();
  };

  testNoteListCanBeCreated();
  testNoteListCanCreateNotes();
})(this);
