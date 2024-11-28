create database if not exists truckbase;

use truckbase;

create table stocks (
    id int NOT NULL AUTO_INCREMENT,
    ticker varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

