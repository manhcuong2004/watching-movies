const express = require('express');
const cors = require('cors');

require("dotenv").config();
const app = express();
const port = process.env.PORT;
const systemConfig = require('./config/system');
app.use(cors());

const database = require('./config/database');
database.connect();

const route = require("./routes/client/index-route");
route(app);

app.locals.prefixAdmin = systemConfig.prefixAdmin


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});