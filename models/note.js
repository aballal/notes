(function(exports) {
  var LAST_USED_ID = -1;
  function Note(text) {
    this._text = text;
    this._ID = LAST_USED_ID++;
  };

  Note.prototype.getText = function() {
    return this._text;
  };

  Note.prototype.getID = function() {
    return this._ID;
  };

  //See if you can attach this constant to Note
  //Note.prototype.LAST_USED_ID = -1;

  exports.Note = Note;
})(this);
