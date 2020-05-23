DROP DATABASE IF EXISTS task_list; --test
CREATE DATABASE task_list;
USE task_list;

-- Drop Tables

DROP TABLE IF EXISTS users; 
   
CREATE TABLE users (                       
	use_email VARCHAR(100) NOT NULL PRIMARY KEY,     
	use_password VARCHAR(100) NOT NULL,
	use_firstname VARCHAR(100) NOT NULL,
	use_lastname VARCHAR(100) NOT NULL, 
	use_date_of_last_password_update TIMESTAMP NOT NULL,
	use_activation_key VARCHAR(50),
	use_status VARCHAR(30) NOT NULL
  use_group INTEGER NOT NULL
    FOREIGN KEY (use_group)
        REFERENCES social_group(soc_id)
        ON DELETE CASCADE
);

DROP TABLE IF EXISTS social_group;

CREATE TABLE social_group (
	soc_id INTEGER NOT NULL PRIMARY KEY,
	soc_description VARCHAR(250) NOT NULL,
	soc_imagen VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS list;

CREATE TABLE list (
	
	lis_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	lis_user_email VARCHAR(100) NOT NULL,
	lis_tasks INTEGER NOT NULL,
	lis_registration_date TIMESTAMP NOT NULL,
	
	INDEX user_email_index (user_email),
    FOREIGN KEY (lis_user_email)
        REFERENCES users(use_email)
        ON DELETE CASCADE
);

DROP TABLE IF EXISTS task;

CREATE TABLE task (
	
	tas_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	tas_list VARCHAR(100) NOT NULL,
	tas_entry_value VARCHAR(2000) NOT NULL,
	tas_registration_date TIMESTAMP NOT NULL,
	tas_status VARCHAR(30) NOT NULL
	
    FOREIGN KEY (tas_list)
        REFERENCES list(lis_id)
        ON DELETE CASCADE
);