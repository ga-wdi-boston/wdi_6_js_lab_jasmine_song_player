function Player() {
	this.currentlyPlayingSong = null,
	this.isPlaying = true;

};

Player.prototype.play = function(s) {
	this.currentlyPlayingSong = s
};

Player.prototype.pause = function() {
	this.isPlaying = false;
};

Player.prototype.resume = function() {
	if (this.isPlaying === false) {
		this.isPlaying = true;
	} else {
		throw new Error("song is already playing")
	}

};

Player.prototype.makeFavorite = function() {
	this.currentlyPlayingSong.persistFavoriteStatus(true);
};


