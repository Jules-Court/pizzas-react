DROP DATABASE IF EXISTS PizzaS;
CREATE DATABASE PizzaS;

\c pizzas
 
 CREATE TABLE Commande (
    CommandeID SERIAL NOT NULL,
    LivreurID int,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Prix int NOT NULL,
    Contenu varchar(255)NOT NULL,
    Addresse varchar(255) NOT NULL,
    PRIMARY KEY (CommandeID)
);

