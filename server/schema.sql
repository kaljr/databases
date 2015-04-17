CREATE DATABASE chatterbox;


USE chatterbox;

CREATE TABLE `messages` (
  `date` DATETIME,
  `username`  VARCHAR(60),
  `roomname`  VARCHAR(60),
  `message` VARCHAR(255),
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY  (`id`)
);

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(60),
  `user_id` INT,
  PRIMARY KEY  (`id`)
);

CREATE TABLE `rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `room` VARCHAR(60),
  `room_id` INT,
  PRIMARY KEY  (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `users_fk1` FOREIGN KEY (`user_id`) REFERENCES users(`id`);
ALTER TABLE `rooms` ADD CONSTRAINT `rooms_fk1` FOREIGN KEY (`room_id`) REFERENCES rooms(`id`);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

