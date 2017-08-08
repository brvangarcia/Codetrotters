const moment = require("moment");

function AlbumGenerator(args){
  const {artist, song, playTime} = args;

  let _artist = artist || '';
  let _song = song || '';
  let _playTime = playTime || -1;
  const createdAt = moment(Date.now()).format('LLL');

  const setArtist = (artist) => {
    _artist = artist;
  };

  const getArtist = (artist) => {
    return _artist;
  };

  const setSong = (song) => {
      _song = song;
  };

  const getSong = (song) => {
      return _song;
  };

  const setPlayTime = (playTime) => {
      _playTime = playTime;
  };

  const getPlayTime = (playTime) => {
      return _playTime;
  };

  const toJSON = () => {
    console.log({
      artist: _artist,
      song: _song,
      playTime: _playTime,
      createdAt,
    });
  };

    return {
      setArtist,
      getArtist,
      setSong,
      getSong,
      setPlayTime,
      getPlayTime,
      toJSON,
    };
  };


  module.exports = AlbumGenerator;
