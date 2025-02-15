const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");

require("dotenv").config();
const app = express();
const port = process.env.PORT;
const systemConfig = require('./config/system');
app.use(cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true // Cho phép gửi cookie
}));
app.use(express.json()); // Middleware để parse JSON
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


const database = require('./config/database');
database.connect();

const route = require("./routes/client/index-route");
route(app);

app.locals.prefixAdmin = systemConfig.prefixAdmin


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});