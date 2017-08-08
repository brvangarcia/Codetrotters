const AlbumGenerator = require('./AlbumGenerator');

const myAlbum = new AlbumGenerator({
  artist: "Bryan",
  song: "My song",
  playTime: 180
});


myAlbum.toJSON();
