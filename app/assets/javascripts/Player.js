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
  },

  resume: function(){
    if(this.isPlaying) {
      throw new Error("song is already playing");
    } else {
      this.isPlaying = true;
    }
  }
};
