CREATE TABLE artists (
	name varchar(2000) NOT NULL,
	bid int PRIMARY KEY,
	image_small varchar(2000),
	image varchar(2000)
)
GO

INSERT INTO artists
VALUES
('Liam',1,'https://www.imagesource.com/cache/pcache2/00005542.jpg', 'https://www.imagesource.com/cache/pcache2/00005796.jpg'),
('Emma',2, 'https://www.imagesource.com/cache/pcache2/00007209.jpg','https://www.imagesource.com/cache/pcache2/00006063.jpg'),
('Amelia',3, 'https://www.imagesource.com/cache/pcache2/00005489.jpg','https://www.imagesource.com/cache/pcache2/00005551.jpg'),
('Mia',4, 'https://www.imagesource.com/cache/pcache2/00006754.jpg','https://www.imagesource.com/cache/pcache2/00006031.jpg'),
('Sandy', 5 , 'https://www.imagesource.com/cache/pcache2/00368668.jpg', 'https://www.imagesource.com/cache/pcache2/00368647.jpg'),
('Mary', 6, 'https://www.imagesource.com/cache/pcache2/00368667.jpg', 'https://www.imagesource.com/cache/pcache2/00368665.jpg'),
('William', 7,'https://www.imagesource.com/cache/pcache2/00368636.jpg', 'https://www.imagesource.com/cache/pcache2/00368631.jpg'),
('Lucas', 8 , 'https://www.imagesource.com/cache/pcache2/00368673.jpg', 'https://www.imagesource.com/cache/pcache2/00368672.jpg')
