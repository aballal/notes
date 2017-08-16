(function(exports){
  function testSingleNoteViewCanBeCreated(){
    var note = new Note("Favourite drink: seltzer");
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(singleNoteView);
  };

  function testSingleNoteViewCreatesHTML() {
    var note = new Note("Favourite drink: seltzer");
    var singleNoteView = new SingleNoteView(note);
    expectedHTML = "<div>Favourite drink: seltzer</div>";
    actualHTML = singleNoteView.createHTML();
    assert.isEqual(actualHTML, expectedHTML);
  };
  testSingleNoteViewCanBeCreated();
  testSingleNoteViewCreatesHTML()
})(this);
