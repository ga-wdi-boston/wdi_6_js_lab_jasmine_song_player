// Player prototype needs to be defined here!
function Player(){

}

Player.prototype = {
  play: function(song){
    this.isPlaying = true;
    this.currentSong = song;
  },
  pause: function(){
    this.isPlaying = false;
  },
  resume: function(){
    this.isPlaying = true;
  }
};
