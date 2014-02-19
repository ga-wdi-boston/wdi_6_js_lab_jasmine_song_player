var Song = function() {
	favoriteStatus = false;

};

Song.prototype.persistFavoriteStatus = function() {
	favoriteStatus = true;
};

