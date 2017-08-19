(function(exports) {
  var noteList, noteListView;

  function beforeEach() {
    if (window.TEST_TYPE === 'unit')
      noteList = {
        createNote: function() {},
        getNotes: function() { return [
          {
            getID: function() {return 0},
            getText: function() {return "JavaScript is a tricky language"}
          },
          {
            getID: function() {return 1},
            getText: function() {return "Ruby is a tidy language"}
          }
        ]}
      };
    else noteList = new NoteList;
    noteListView = new NoteListView(noteList);
    noteList.createNote("JavaScript is a tricky language");
    noteList.createNote("Ruby is a tidy language");
  };

  function testNoteListViewCreatesULOfNotesPlain() {
    beforeEach();
    var expectedHTMLView = "<ul><li><div>JavaScript is a tric</div></li><li><div>Ruby is a tidy langu</div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes(), expectedHTMLView);
    Note.resetLastUsedId();
  };

  function testNoteListViewCreatesULOfNotesURL() {
    beforeEach();
    var expectedHTMLView = "<ul><li><div><a id='note-0' href=\"#notes/0\">JavaScript is a tric</a></div></li><li><div><a id='note-1' href=\"#notes/1\">Ruby is a tidy langu</a></div></li></ul>";
    assert.isEqual(noteListView.createULOfNotes('url'), expectedHTMLView);
    Note.resetLastUsedId();
  };

  testNoteListViewCreatesULOfNotesPlain();
  testNoteListViewCreatesULOfNotesURL();
})(this);
