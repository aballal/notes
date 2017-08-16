(function() {
  function testNoteControllerIsCreated() {
    var noteList = new NoteList;
    noteList.createNote("Favourite drink: seltze");
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController);
  };

  function testNoteControllerInsertsHTMLIntoApp(){
    var noteList = new NoteList;
    noteList.createNote("Favourite drink: seltze");
    var noteController = new NoteController(noteList);
    noteController.insertHTMLIntoApp();
    var actualInnerHTML = document.getElementById('app').innerHTML;
    var expectedInnerHTML = "<ul><li><div>Favourite drink: sel</div></li></ul>";
    assert.isEqual(actualInnerHTML, expectedInnerHTML);
  };

  testNoteControllerIsCreated();
  testNoteControllerInsertsHTMLIntoApp()
})(this);
