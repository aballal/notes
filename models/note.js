(function(exports) {
  var LAST_USED_ID = 0;

  function Note(text) {
    this._text = text;
    this._ID = LAST_USED_ID;
    LAST_USED_ID++;
  };

  Note.resetLastUsedId = function() {
    LAST_USED_ID = 0;
  };

  Note.prototype.getText = function() {
    return this._text;
  };

  Note.prototype.getID = function() {
    return this._ID;
  };

  exports.Note = Note;
})(this);
