# UWL E-Commerce Group Project: CmdCtrl

### Run instructions:
Ensure you have a .env file in both the frontend and backend folders, and populate with the required API keys, passowrds, ports etc. To run the front end, use the `npm run dev` command to spin up the frontend website.
If you haven't populated the database, use the seeder.js file in the backend folder (assuming you have made a successful connection to MongoDB) and run `node seeder.js` to populate it with product data.
To spin up the backend server, run `npm start` - you should see a MONGU_URI connection and "MongoDB connected" message in the terminal.
If all is working well, with both the backend and front end running you should see a home page with a products list rendered!
