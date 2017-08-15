(function(exports) {
  function testNoteHasAText() {
    var note = new Note("JavaScript");
    assert.isEqual(note.getText(), "JavaScript");
  };
  testNoteHasAText();
})(this);
