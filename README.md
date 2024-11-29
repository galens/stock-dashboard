# stock-dashboard

This is the Truckbase take home assignment to make a real-time stock dashboard

Installation Steps:

1. git clone the repo
2. naviage into the repo folder
3. type `docker-compose up`

Stack:
-backend:
    node.js
    express
    typescript
-frontend:
    react
    typescript
-database:
    mysql

To manually connect to db:
`mysql -hlocalhost --protocol=TCP -uroot -p`

**_ Considerations _**
For demonstration purposes I have hardcoded values for the database user and password. In a production system I would instead use dotenv and import any secrets from an environment configuration file or use AWS Parameter Store.
