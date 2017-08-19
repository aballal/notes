(function(exports){
  var note, singleNoteView;

  function beforeEach() {
    if (window.TEST_TYPE === 'unit')
      note = { getText: function() {return "Favourite drink: seltzer"}};
    else note = new Note("Favourite drink: seltzer");
    singleNoteView = new SingleNoteView(note);
  };

  function testSingleNoteViewCanBeCreated(){
    beforeEach();
    assert.isTrue(singleNoteView);
    Note.resetLastUsedId();
  };

  function testSingleNoteViewCreatesHTML() {
    beforeEach();
    expectedHTML = "<div>Favourite drink: seltzer</div>";
    assert.isEqual(singleNoteView.createHTML(), expectedHTML);
    Note.resetLastUsedId();
  };

  testSingleNoteViewCanBeCreated();
  testSingleNoteViewCreatesHTML()
})(this);
