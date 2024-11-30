# stock-dashboard

This is the Truckbase take home assignment to make a real-time stock dashboard

Installation Steps:

1. git clone the repo
2. navigate into the repo folder
3. type `docker-compose up`
4. in the browser, navigate to: http://localhost:3000/
5. add stocks tickers

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

** Considerations **

For demonstration purposes I have hardcoded values for the database user and password. In a production system I would instead use dotenv and import any secrets from an environment configuration file or use AWS Parameter Store.

For simplicity, I opted to use a polling architecture instead of using websockets. In a production environment, I would have gone with using websockets and would probably use something like https://pusher.com/ instead of trying to hand roll the boiler-plate websockets server.