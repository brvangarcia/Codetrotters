const expect = require('chai').expect;
const AlbumGenerator = require('../albumGenerator');

const params = {
  artist: "Artist",
  song: "Song",
  playTime: 300
}

const myAlbum = new AlbumGenerator(params);

describe('AlbumGenerator', () =>{
  describe('#instatiation', () => {
    it('should set the Album values', () =>{
      expect(myAlbum.getArtist()).equals(params.artist);
      expect(myAlbum.getSong()).equals(params.song);
      expect(myAlbum.getPlayTime()).equals(params.playTime);
    })
  })
})


describe('setArtist', () =>{
  describe('#instatiation', () => {
    it('the initial value should not bet the same as the initial', () =>{
      expect(myAlbum.getArtist()).to.be.a('string');
      expect(myAlbum.getArtist()).to.equal('Artist');
    })
  })
})

describe('setSong', () =>{
  describe('#instatiation', () => {
    it('the initial value should not bet the same as the initial', () =>{
      expect(myAlbum.getSong()).to.be.a('string');
      expect(myAlbum.getSong()).to.equal('Song');
    })
  })
})

describe('setPlayTime', () =>{
  describe('#instatiation', () => {
    it('the initial value should not bet the same as the initial', () =>{
      expect(myAlbum.getPlayTime()).to.equal(300);
    })
  })
})
