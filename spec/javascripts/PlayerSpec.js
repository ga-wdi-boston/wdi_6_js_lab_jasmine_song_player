describe("Song", function(){
  describe("initializer", function(){
    it("accepts a song title", function(){
      var song = new Song("New Shoes");

      expect(song.title).toEqual("New Shoes");
    });
  });
});

describe("Player", function() {
  // Since we intend to assign `player` and `song` in a beforeEach, we must
  // declare them up here -- if we declared them in the beforeEach, they
  // would go out of scope immediately. Note this means we are responsible
  // for cleanup of these variables between tests! (they're basically globals)
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song("New Shoes");
  });

  describe("#play", function(){
    it("plays a song", function() {
      player.play(song);

      expect(player.isPlaying).toBe(true);
      expect(player.currentSong).toEqual(song);
    });
  });

  describe("#pause", function(){
    it("pauses the current song", function() {
      player.play(song);
      player.pause();

      expect(player.isPlaying).toBe(false);
    });
  });

  describe("#resume", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("resumes after pausing", function() {
      player.resume();

      expect(player.isPlaying).toBe(true);
    });

    // Demonstrates expecting that a function call will throw an error
    it("throws an error if not paused", function() {
      player.resume();

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });

  // Demonstrates use of spies to intercept and test function calls
  // (note your Song itself does *not* need any functions on it for this to pass!)
  describe("#makeFavorite", function(){
    it("tells the current song to persist its favorite status", function() {
      spyOn(song, 'persistFavoriteStatus');

      player.play(song);
      player.makeFavorite();

      expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
  });
});
