var Player = function() {};

Player.prototype = {
  play: function(song) {
    this.currentlyPlayingSong = song;
    this.isPlaying = true;
  },
  pause: function() {
    this.pausedSong = this.currentlyPlayingSong;
    this.currentlyPlayingSong = null;
    this.isPlaying = false;
  },
  resume: function() {
    if (this.isPlaying) {
      throw new Error("song is already playing");
    }
    this.currentlyPlayingSong = this.pausedSong;
    this.pausedSong = null;
    this.isPlaying = true;
  },
  makeFavorite: function() {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
  }
};
