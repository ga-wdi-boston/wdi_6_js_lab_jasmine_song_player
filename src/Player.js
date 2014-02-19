
var Player = function() {
	this.currentlyPlayingSong = null;
	this.isPlaying = false;
};

Player.prototype.play = function(song) {
	this.currentlyPlayingSong = song;
	this.isPlaying = true;
};

Player.prototype.pause = function(song) {
	this.isPlaying = false;

};

Player.prototype.resume = function(song) {
	if(this.isPlaying === true) {
		throw new Error("song is already playing");
	}
	else {
		this.isPlaying = true;
	}
};

Player.prototype.makeFavorite = function(song) {
	this.currentlyPlayingSong.persistFavoriteStatus(true);
};