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

  function testNoteControllerInsertsURLIntoApp() {
    beforeEach();
    noteController.insertURLIntoApp('url');
    var expectedInnerHTML = "<ul><li><div id=\"note-0\"><a href=\"#notes/0\">Favourite drink: sel</a></div></li></ul>";
    assert.isEqual(document.getElementById('app').innerHTML, expectedInnerHTML);
    Note.resetLastUsedId();
  };

  function testNoteControllerShowsNote() {
    beforeEach();
    noteController.showNote(noteList.getNotes()[0].getText());
    var expectedInnerHTML = "Favourite drink: seltze";
    assert.isEqual(document.getElementById('app').innerHTML, expectedInnerHTML);
    Note.resetLastUsedId();
  };

  testNoteControllerIsCreated();
  testNoteControllerInsertsHTMLIntoApp();
  testNoteControllerInsertsURLIntoApp();
  testNoteControllerShowsNote();
})(this);
