const express = require("express");
const mongo = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ optionSuccessStatus: 200 }));

mongoose.connect(process.env.DB_URI);

app.use(express.static("public"));
app.get("/", (req, res) => res.sendFile(`${__dirname}/views/index.html`));

app.get("/api/whoami", (req, res) => {
  //
});

app.listen(port, () => console.log(`Server runnig at port ` + port));
