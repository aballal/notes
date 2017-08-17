(function(exports) {
  var noteList, noteListView;

  function beforeEach() {
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
    Note.resetLastUsedId();
  };

  function testNoteListViewShowsSummary() {
    beforeEach();
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is a tidy language");

    var expectedHTMLView = "<ul><li><div id='note-0'>JavaScript is a tric</div></li><li><div id='note-1'>Ruby is a tidy langu</div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);
    Note.resetLastUsedId();
  };

  function testNoteListViewShowsURLs() {
    beforeEach();
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is a tidy language");

    var expectedHTMLView = "<ul><li><div id='note-0'><a href=\"#notes/0\">JavaScript is a tric</a></div></li><li><div id='note-1'><a href=\"#notes/1\">Ruby is a tidy langu</a></div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes('url'), expectedHTMLView);
    Note.resetLastUsedId();
  };

  testNoteListViewConvertsToHTMLView();
  testNoteListViewShowsSummary();
  testNoteListViewShowsURLs();
})(this);
