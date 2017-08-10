const albumGenerator = (albumQuantity) => {
  const albumsArr = [];
  for (var i = 0; i < albumQuantity; i++) {
    const num = i + 1;
    albumsArr.push({
      id: num,
      artist: `Artist Name ${num}`,
      album: `Artist Name ${num}`,
      songs: _songGenerator(10),
    });
  }
  return albumsArr;
};

const _songGenerator = (songQuantity) => {
  const songsArr = [];
  for (var i = 0; i < songQuantity; i++) {

    const num = i + 1;
    songsArr.push({
      title: `Song #${num}`,
      duration: 240,
    });
  }
  return songsArr;
};

module.exports = albumGenerator;
