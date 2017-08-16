(function(exports) {
  function testNoteListViewMultipleNotes() {
    var noteList = new NoteList;
    noteList.createNote("JavaScript");
    noteList.createNote("Ruby");

    var noteListView = new NoteListView(noteList);
    var actualHTMLView = noteListView.convertToHTMLView();
    var expectedHTMLView = "<ul><li><div id='note-7'>JavaScript</div></li><li><div id='note-8'>Ruby</div></li></ul>";

    assert.isEqual(actualHTMLView, expectedHTMLView);
  };
  testNoteListViewMultipleNotes();
})(this);

(function(exports) {
  function testNoteListViewOneNote() {
    var noteList = new NoteList;
    noteList.createNote("JavaScript");

    var noteListView = new NoteListView(noteList);
    var actualHTMLView  = noteListView.convertToHTMLView();
    var expectedHTMLView = "<ul><li><div id='note-9'>JavaScript</div></li></ul>";

    assert.isEqual(actualHTMLView, expectedHTMLView);
  };
  testNoteListViewOneNote();
})(this);

(function(exports) {
  function testNoteListViewNoNote() {
    var noteList = new NoteList;

    var noteListView = new NoteListView(noteList);
    var actualHTMLView = noteListView.convertToHTMLView();
    var expectedHTMLView = "<ul></ul>";

    assert.isEqual(actualHTMLView, expectedHTMLView);
  };
  testNoteListViewNoNote();
})(this);

(function(exports) {
  function testNoteListViewShowsSummary() {
    var noteList = new NoteList;
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is neat and tidy language");

    var noteListView = new NoteListView(noteList);
    var actualHTMLView = noteListView.convertToHTMLView();
    var expectedHTMLView = "<ul><li><div id='note-10'>JavaScript is a tric</div></li><li><div id='note-11'>Ruby is neat and tid</div></li></ul>";

    assert.isEqual(actualHTMLView, expectedHTMLView);
  };
  testNoteListViewShowsSummary();
})(this);

(function(exports) {
  function testNoteListViewCreatesURL() {
    var noteList = new NoteList;
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is neat and tidy language");

    var noteListView = new NoteListView(noteList);
    var actualURLs = noteListView.createURLForEachNote();
    var expectedURLs = "<a href=\"#notes/12\">JavaScript is a tric</a><a href=\"#notes/13\">Ruby is neat and tid</a>";

    assert.isEqual(actualURLs, expectedURLs);
  };
  testNoteListViewCreatesURL();
})(this);
