(function(exports) {
  function testNoteHasAText() {
    var note = new Note("JavaScript");
    assert.isEqual(note.getText(), "JavaScript");
  };
  testNoteHasAText();
})(this);

(function(exports) {
  function testNoteHasAUniqueID() {
    var note1 = new Note("JavaScript");
    var note2 = new Note("Ruby");
    var note3 = new Note("C++");
    assert.isEqual(note1.getID(),0);
    assert.isEqual(note2.getID(),1);
    assert.isEqual(note3.getID(),2);
  };
  testNoteHasAUniqueID();
})(this);
