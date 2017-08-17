(function() {
  var noteList, noteController;

  function beforeEach() {
    noteList = new NoteList;
    noteController = new NoteController(noteList);
    noteList.createNote("Favourite drink: seltze");
  };

  function testNoteControllerIsCreated() {
    beforeEach();
    assert.isTrue(noteController);
    Note.resetLastUsedId();
  };

  function testNoteControllerInsertsHTMLIntoApp(){
    beforeEach();
    noteController.insertHTMLIntoApp();
    var expectedInnerHTML = "<ul><li><div id=\"note-0\">Favourite drink: sel</div></li></ul>";
    assert.isEqual(document.getElementById('app').innerHTML, expectedInnerHTML);
    Note.resetLastUsedId();
  };

  testNoteControllerIsCreated();
  testNoteControllerInsertsHTMLIntoApp()
})(this);
