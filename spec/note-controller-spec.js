(function() {
  function testNoteControllerIsCreated() {
    Note.resetLastUsedId();
    var noteList = new NoteList;
    var noteController = new NoteController(noteList);
    noteList.createNote("Favourite drink: seltze");
    assert.isTrue(noteController);
  };

  function testNoteControllerInsertsHTMLIntoApp(){
    Note.resetLastUsedId();
    var noteList = new NoteList;
    var noteController = new NoteController(noteList);
    noteList.createNote("Favourite drink: seltze");
    noteController.insertHTMLIntoApp();
    var expectedInnerHTML = "<ul><li><div id=\"note-0\">Favourite drink: sel</div></li></ul>";
    assert.isEqual(document.getElementById('app').innerHTML, expectedInnerHTML);
  };

  testNoteControllerIsCreated();
  testNoteControllerInsertsHTMLIntoApp()
})(this);
