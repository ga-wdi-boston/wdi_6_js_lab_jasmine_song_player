// Song prototype needs to be defined here!
function Song(){

}

Song.prototype = {
  play: function(song){
    this.isPlaying = true;
    this.currentSong = song;
  }
};
