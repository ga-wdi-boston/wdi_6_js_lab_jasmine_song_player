var Song = function() {};

Song.prototype = {
  persistFavoriteStatus: function(bool) {
    if (!bool === undefined) {
      this._persistFavoriteStatus = bool;
    }
    return this._persistFavoriteStatus;
  }
}
