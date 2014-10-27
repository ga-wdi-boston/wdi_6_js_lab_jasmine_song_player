// Player prototype needs to be defined here!

function Player() {

  this.play = function(song) {
    this.isPlaying = true;
    this.currentSong = song;
  }

  this.pause = function() {
    this.isPlaying = false;
  }

  this.resume = function() {
    if (this.isPlaying) {
      throw new Error("song is already playing");
    } else {
      this.isPlaying = true;
    }
  }

  this.makeFavorite = function() {
    this.currentSong.persistFavoriteStatus(true);
  }

}