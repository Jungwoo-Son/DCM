DROP DATABASE IF EXISTS dcm;
CREATE DATABASE IF NOT EXISTS dcm;

use dcm;

DROP TABLE IF EXISTS dependcy;
DROP TABLE IF EXISTS user_project;
DROP TABLE IF EXISTS component;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS project;


CREATE TABLE IF NOT EXISTS project (
	id INT NOT NULL AUTO_INCREMENT,
    name  VARCHAR(30) NOT NULL,
    
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS user(
	id	VARCHAR(30) NOT NULL,
    contact VARCHAR(80) NOT NULL,
    name	VARCHAR(8) NOT NULL,
    pw 		CHAR(128)  NOT NULL,
    
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS component (
	id	INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
    manager		VARCHAR(20) NOT NULL,
    project_id INT NOT NULL,
	
    FOREIGN KEY(manager) REFERENCES user(id) ON UPDATE CASCADE,
    FOREIGN KEY(project_id) references project(id) ON UPDATE CASCADE,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS dependency (
	subject		INT NOT NULL,
    target	INT NOT NULL,
    
    FOREIGN KEY(subject) REFERENCES component(id) ON DELETE CASCADE,
    FOREIGN KEY(target) REFERENCES component(id) ON DELETE CASCADE,
    PRIMARY KEY(subject, target)
);

CREATE TABLE IF NOT EXISTS  user_project(
	project_id	INT NOT NULL,
    user_id		VARCHAR(30) NOT NULL,
    
    FOREIGN KEY(project_id) REFERENCES project(id),
    FOREIGN KEY(user_id) REFERENCES user(id),
    
    PRIMARY KEY(project_id, user_id)
);