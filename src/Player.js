// Player prototype needs to be defined here!
// var play, isPlaying;
// var Player = {

// play: function(song){
// isPlaying:  true;
// currentSong: song;
// },



// }

var play, isPlaying
function Player() {



}

function Song(title) {


}


Player.prototype.play = function(song){
  this.isPlaying = true;
  this.currentSong = song;
};

Player.prototype.pause = function(song){
  this.isPlaying = false;
}

Player.prototype.resume = function(){
  this.isPlaying = true;
  if(this.pause == true){
    throw "song is already playing";
  }
}
Player.prototype.persistFavoriteStatus = function(){

}
Song.prototype.makeFavorite = function(){
  this.persistFavoriteStatus = true;
}



// Player.prototype.currentSong = function(song){
//   return song;
// }
// Player.prototype.play = function(song, isPlaying , currentSong) {
//  return true;
// }



// // Player.prototype.pause(){
// //   this.isPlaying = false;
// // }






// Player.prototype.play = function(song){

//   return true;


// };

//   Player.prototype.isPlaying = function(){
//     return true;

// };


// Player.prototype.currentSong = function(song){
//   return true;

// };



// //   Player.prototype.pause = function(){


// //   };

// //   Player.prototype.resume = function(){

// //   };

// //   Player.prototype.makeFavorite = function(){


// //   };






