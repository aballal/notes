(function() {
  var noteList, noteController;

  function beforeEach() {
    noteList = new NoteList;
    noteController = new NoteController(noteList);
    noteList.createNote("Favourite drink: seltze");
  };

  function afterEach() {
    document.getElementById('app').innerHTML=""
    Note.resetLastUsedId();
  }

  function testNoteControllerIsCreated() {
    beforeEach();
    assert.isTrue(noteController);
    afterEach();
  };

  function testNoteControllerInsertsHTMLIntoApp(){
    beforeEach();
    noteController.insertHTMLIntoApp();
    var expectedInnerHTML = "<ul><li><div>Favourite drink: sel</div></li></ul>";
    assert.isEqual(document.getElementById('app').innerHTML, expectedInnerHTML);
    afterEach();
  };

  function testNoteControllerInsertsURLIntoApp() {
    beforeEach();
    noteController.insertURLIntoApp('url');
    var expectedInnerHTML = "<ul><li><div><a id=\"note-0\" href=\"#notes/0\">Favourite drink: sel</a></div></li></ul>";
    assert.isEqual(document.getElementById('app').innerHTML, expectedInnerHTML);
    afterEach();
  };

  function testNoteControllerShowsNote() {
    beforeEach();
    noteController.showNote(noteList.getNotes()[0].getText());
    var expectedInnerHTML = "Favourite drink: seltze";
    assert.isEqual(document.getElementById('app').innerHTML, expectedInnerHTML);
    afterEach();
  };

  function testNoteControllerGetsNotefromUrl() {
    beforeEach();
    assert.isEqual(noteController.getNoteFromUrl("#notes/0"), "Favourite drink: seltze");
    afterEach();
  };

  testNoteControllerIsCreated();
  testNoteControllerInsertsHTMLIntoApp();
  testNoteControllerInsertsURLIntoApp();
  testNoteControllerShowsNote();
  testNoteControllerGetsNotefromUrl();
})(this);
