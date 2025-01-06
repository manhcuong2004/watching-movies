const express = require('express');
require("dotenv").config();
const app = express();
const port = process.env.PORT;

const database = require('./config/database');
database.connect();

const route = require("./routes/client/index-route");
route(app);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});