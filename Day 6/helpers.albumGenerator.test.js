const expect = require("chai").expect;
const generateAlbum = require("../helpers/albumGenerator");

describe("User Route", function (){

    it("should generate a given amount of users", function () {
      const albums = generateAlbum(5);

      expect(albums).to.have.lengthOf(5);

      albums.forEach((album) => {
        expect(album).to.be.an("object");
        expect(album).to.have.property("artist");
        expect(album).to.have.property("album");
        expect(album).to.have.property("songs");
      });
    });
    it("albums should contain the correct properties", function(){
      const albums = generateAlbum(5);

      albums.forEach((album) => {
        expect(album).to.have.an("object");
        expect(album).to.have.property("artist");
        expect(album).to.have.property("album");
        expect(album).to.have.property("songs");
      });
    })
    it("songs should contain the correct properties", function(){
      const albums = generateAlbum(5);

      albums.forEach(({songs}) => {
        songs.forEach((song) => {
          expect(song).to.be.an("object");
          expect(song).to.have.property("title");
          expect(song).to.have.property("duration");
        }
      )
      });
    })
})
