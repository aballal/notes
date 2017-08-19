(function(exports){
  var noteList, noteController;

  function setup() {
    noteList = new NoteList();

    noteList.createNote("Albert Einstein - We cannot solve our problems with the same thinking we used to create them.");
    noteList.createNote("Richard Feynman - If you can't explain it simply, you don't understand it well enough.");
    noteList.createNote("Batman - It's not who I am underneath but what I do that defines me.");

    noteController = new NoteController(noteList)
    noteController.insertURLIntoApp();
    noteController.makeUrlChangeShowNoteForCurrentPage();
    noteController.makeTextSubmitPostTextContent();
  };

  setup();
  exports.noteController = noteController;
  exports.TEST_TYPE = 'unit'; //'unit' uses mocks, anything else uses real instances
})(this);
