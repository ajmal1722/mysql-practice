USE mysql_practice;

CREATE TABLE PRODUCTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (200) NOT NULL,
    description VARCHAR (450),
    price INT,
    image TEXT,
)