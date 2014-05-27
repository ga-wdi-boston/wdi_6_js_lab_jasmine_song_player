describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("can play a song", function() {
    player.play(song);

    expect(player.isPlaying).toBe(true);
    expect(player.currentSong).toEqual(song);
  });

  describe("with a paused song", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("indicates the song is not playing", function() {
      expect(player.isPlaying).toBe(false);
    });

    it("can resume playing the song", function() {
      player.resume();

      expect(player.isPlaying).toBe(true);
      expect(player.currentSong).toEqual(song);
    });
  });

  // Demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user makes it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  // Demonstrates use of expected exceptions
  describe("with a playing song", function() {
    it("throws an exception when attempting to resume", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
