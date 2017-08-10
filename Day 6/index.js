var express = require('express');
var router = express.Router();

const albums = [{
  artist: "Artist Name",
  album: "Album Name",
  songs : [
    {title: 'Song Title 1', duration: 360},
    {title: 'Song Title 2', duration: 360},
    {title: 'Song Title  3', duration: 360},
  ]
}
];

router.get('/', function(req, res, next) {
  res.render('albums_list',{
    data: _albums
  });
});


module.exports = router;
