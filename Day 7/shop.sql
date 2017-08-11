CREATE TABLE client (
  id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price INT NOT NULL
);

CREATE TABLE cart (
  id INT PRIMARY KEY AUTO_INCREMENT,
  quantity INT NOT NULL
);

INSERT INTO cart (quantity) VALUES (10);

INSERT INTO products (name, price) VALUES ("Nuts", 180);

INSERT INTO client (full_name, email) VALUES ("John Doe", "john.doe@aemail.com");