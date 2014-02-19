function Player(){
	 // this.currentlyPlayingSong = undefined;
	 // this.isPlaying = undefined;

};

Player.prototype.play = function(song){
	this.currentlyPlayingSong = song;
	this.isPlaying = true;
};

Player.prototype.pause = function(song){
	this.isPlaying = false;
}

Player.prototype.resume = function(song){
	
	if(this.isPlaying){
		throw new Error("song is already playing");
	}else{
		this.play(this.currentlyPlayingSong);
	}
}


Player.prototype.makeFavorite = function(){
	this.currentlyPlayingSong.persistFavoriteStatus(true);
}
