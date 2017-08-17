(function(exports) {
  var note;

  function beforeEach() {
    note = new Note("JavaScript");
  };

  function testNoteHasAText() {
    beforeEach();
    assert.isEqual(note.getText(), "JavaScript");
    Note.resetLastUsedId();
  };

  function testNoteHasAUniqueID() {
    beforeEach();
    var note2 = new Note("Ruby");
    var note3 = new Note("C++");
    assert.isEqual(note.getID(),0);
    assert.isEqual(note2.getID(),1);
    assert.isEqual(note3.getID(),2);
    Note.resetLastUsedId();
  };

  testNoteHasAText();
  testNoteHasAUniqueID();
})(this);
