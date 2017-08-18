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
    expectedHTMLView = "<ul><li><div>JavaScript</div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);

    noteList.createNote("Ruby");
    expectedHTMLView = "<ul><li><div>JavaScript</div></li><li><div>Ruby</div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);
    Note.resetLastUsedId();
  };

  function testNoteListViewShowsSummary() {
    beforeEach();
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is a tidy language");

    var expectedHTMLView = "<ul><li><div>JavaScript is a tric</div></li><li><div>Ruby is a tidy langu</div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);
    Note.resetLastUsedId();
  };

  function testNoteListViewShowsURLs() {
    beforeEach();
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is a tidy language");

    var expectedHTMLView = "<ul><li><div><a id='note-0' href=\"#notes/0\">JavaScript is a tric</a></div></li><li><div><a id='note-1' href=\"#notes/1\">Ruby is a tidy langu</a></div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes('url'), expectedHTMLView);
    Note.resetLastUsedId();
  };

  testNoteListViewConvertsToHTMLView();
  testNoteListViewShowsSummary();
  testNoteListViewShowsURLs();
})(this);
