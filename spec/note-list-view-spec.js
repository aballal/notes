(function(exports) {
  var noteList, noteListView;

  function beforeEach() {
    Note.resetLastUsedId();
    noteList = new NoteList;
    noteListView = new NoteListView(noteList);
  };

  function testNoteListViewConvertsToHTMLView() {
    beforeEach();
    var expectedHTMLView = "<ul></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);

    noteList.createNote("JavaScript");
    expectedHTMLView = "<ul><li><div id='note-0'>JavaScript</div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);

    noteList.createNote("Ruby");
    expectedHTMLView = "<ul><li><div id='note-0'>JavaScript</div></li><li><div id='note-1'>Ruby</div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);
  };

  function testNoteListViewShowsSummary() {
    beforeEach();
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is a tidy language");

    var expectedHTMLView = "<ul><li><div id='note-0'>JavaScript is a tric</div></li><li><div id='note-1'>Ruby is a tidy langu</div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);
  };

  function testNoteListViewCreatesURL() {
    beforeEach();
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is a tidy language");

    var expectedURLs = "<a href=\"#notes/0\">JavaScript is a tric</a><a href=\"#notes/1\">Ruby is a tidy langu</a>";
    assert.isEqual(noteListView.createURLForEachNote(), expectedURLs);
  };

  testNoteListViewConvertsToHTMLView();
  testNoteListViewShowsSummary();
  testNoteListViewCreatesURL();
})(this);
