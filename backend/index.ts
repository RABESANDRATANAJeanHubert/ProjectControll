
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cron = require("node-cron");
const card = require("./routes/Card");
const catalog = require('./routes/Catalog');
const transaction = require('./routes/Transaction');
const PORT: number = 1010;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS is enabled for all origins
let corsOptions = {
    origin: [ 'http://127.0.0.1:9000', 'http://localhost:9000', 'http://localhost', 'http://mycpp.cpp-system.com' ]
};

app.use(cors(corsOptions));
app.get("/", (req: any, res: any) => {
    res.send("Hello World!");
});
// app.get("/login", logIn);
app.use("/card", card);
app.use('/catalog', catalog);
app.use('/demand', transaction);

app.listen(PORT, () => {
    console.log(`Server running at port http://127.0.0.1:${PORT}`);
    cron.schedule("* * * * *", () => {});
});
