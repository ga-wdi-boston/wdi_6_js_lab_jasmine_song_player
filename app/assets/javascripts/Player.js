function Player(){
  this.isPlaying = false;
}

Player.prototype = {
  play: function(song){
    this.currentSong = song;
    this.isPlaying = true;
  },

  pause: function(){
    this.isPlaying = false;
  }
};
