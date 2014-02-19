function Player() {

};

Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying === true) {
    throw new Error('song is already playing');
  } else {
    this.isPlaying = true;
  }
};

Player.prototype.makeFavorite = function(favorite) {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
}

