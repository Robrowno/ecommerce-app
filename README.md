# UWL E-Commerce Group Project: CmdCtrl

### Run instructions:
Ensure you have a .env file in both the frontend and backend folders, and populate with the required API keys, passowrds, ports etc. To run the front end, use the `npm run dev` command to spin up the frontend website.
If you haven't populated the database, use the seeder.js file in the backend folder (assuming you have made a successful connection to MongoDB) and run `node seeder.js` to populate it with product data.
To spin up the backend server, run `npm start` - you should see a MONGU_URI connection and "MongoDB connected" message in the terminal.
If all is working well, with both the backend and front end running you should see a home page with a products list rendered!


### Login
To sign up and login, use a suitable email and password and click the signup/login button. Firebase will store this basic info and you need nothing else to submit.
You can view a basic profile info page via the navigation.

### Payment

Use this test card info to test processing a payment. DO NOT use your real card details!

Card No: `4242 4242 4242 4242`\
Exp. Date: `12/34`\
CVC: `123`\
But the CVC can be any combination of 3 numbers, e.g, 692, 473, etc.

You can then view your orders in the orders page, accessible via the navigation.


### Products

The Navigation allows you to directly filter by device type, but you can also use our in-built filtering bar on all products pages to narrow down to the device you want. You can filter by brand, price and name.

### Developers

This site was made by Kostas, Sam, Christian and Jay. Feel free to explore out github pages and add us to collaborate on projects in future! :)
