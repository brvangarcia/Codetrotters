const express = require('express');
const router = express.Router();
const generateAlbum = require("../helpers/albumGenerator");

const _albums = generateAlbum(25);

router.get('/', function(req, res, next) {
  res.render('albums_list',{
    data: _albums
  });
});

router.get("/:albumId", function(req, res, next) {
  const id = parseInt(req.params.albumId);
  if(id){
    const albumIndex = id - 1;

    res.render("albums_details", {
      data: _albums[albumIndex],
    });
  }
});

router.get("/edits", function(req, res, next) {
  const id = parseInt(req.params.albumId);
  if(id){
    const albumIndex = id - 1;

    res.render("albums_edit", {
      data: _albums[albumIndex],
    });
  }
});

// router.post("/:albumID/edit", function(req, res, next){
//   const { albumID, artist, album} =  req.params;
//   const id = parseInt(req.params.albumId);
//   if(id) {
//     const albumIndex = id - 1;
//     const album = _albums[albumIndex];
//     album.artist = artist;
//     album.album = album;
//     res.render("albums_details", {
//       data: _albums[id]
//     })
//   }
// });

module.exports = router;
