(function(exports){
  var note, singleNoteView;

  function beforeEach() {
    Note.resetLastUsedId();
    note = new Note("Favourite drink: seltzer");
    singleNoteView = new SingleNoteView(note);
  };

  function testSingleNoteViewCanBeCreated(){
    beforeEach();
    assert.isTrue(singleNoteView);
  };

  function testSingleNoteViewCreatesHTML() {
    beforeEach();
    expectedHTML = "<div>Favourite drink: seltzer</div>";
    assert.isEqual(singleNoteView.createHTML(), expectedHTML);
  };

  testSingleNoteViewCanBeCreated();
  testSingleNoteViewCreatesHTML()
})(this);
