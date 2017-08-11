CREATE TABLE albums (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  artist VARCHAR(100) NOT NULL
);

CREATE TABLE songs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  duration INT NOT NULL
  );

CREATE TABLE albums_songs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  album_id INT NOT NULL,
  song_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES albums(id),
  FOREIGN KEY (song_id) REFERENCES songs(id)
);

# Albums
# Id 1
INSERT INTO albums (name, artist) VALUES ("Album #1", "Artist #1");
INSERT INTO albums (name, artist) VALUES ("Album #2", "Artist #2");

#Songs
# Id 1
INSERT INTO songs (title, duration) VALUES ("Title #1", 180);
# Id 2
INSERT INTO songs (title, duration) VALUES ("Title #2", 160);

INSERT INTO albums_songs (album_id, song_id) VALUES (1, 1);
INSERT INTO albums_songs (album_id, song_id) VALUES (1, 2);
INSERT INTO albums_songs (album_id, song_id) VALUES (2, 1);
