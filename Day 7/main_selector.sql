SELECT a.artist, a.name, s.title, s.duration
FROM albums `a`
INNER JOIN albums_songs `as`
ON as.album_id = a.id
INNER JOIN songs `s`
ON as.song_id = s.id