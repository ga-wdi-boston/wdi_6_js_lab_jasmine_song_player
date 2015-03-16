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
    if(this.isPlaying) { throw new Error("song is already playing"); }
    this.isPlaying = true;
  },
  makeFavorite: function(){
    this.currentSong.persistFavoriteStatus(true);
  }
};
