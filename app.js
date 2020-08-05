const express = require("express");
const mongo = require("mongodb");
const mongoose = require("mongoose");
const validUrl = require("valid-url");
const dns = require("dns");
const shortid = require("shortid");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Body parser
app.use(express.urlencoded({ extended: true }));

app.use(cors({ optionSuccessStatus: 200 }));

// Connection to the database and error handling
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

mongoose.connection.on("error", (error) => console.log(error));

// Schema setup
const urlSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  original_url: String,
});

const Url = mongoose.model("Url", urlSchema);

// Serve styles and scripts from public dir
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(`${__dirname}/views/index.html`));

// POST new url to be shortened
app.post("/api/shorturl/new", (req, res) => {
  const originalUrl = req.body.url;

  // Validate url format
  if (validUrl.isWebUri(originalUrl)) {
    // Validate hostname
    dns.resolve(new URL(originalUrl).hostname, (error, records) => {
      if (error) return res.json({ error: "Invalid Hostname" });
      // Check if url already exit in the database
      Url.findOne({ original_url: originalUrl }, (error, foundUrl) => {
        if (error) return console.log(error);
        if (foundUrl) {
          res.json({ original_url: originalUrl, short_url: foundUrl._id });
        } else {
          // Add url to the database
          Url.create({ original_url: originalUrl }, (error, newUrl) => {
            if (error) return console.log(error);
            // console.log(newUrl);
            res.json({ original_url: originalUrl, short_url: newUrl._id });
          });
        }
      });
    });
  } else {
    res.json({ error: "Invalid URL" });
  }
});

// Redirection logic
app.get("/api/shorturl/:id", (req, res) => {
  Url.findById(req.params.id, (error, foundUrl) => {
    if (error) return console.log(error);
    res.redirect(301, foundUrl.original_url);
  });
});

// Server listening
app.listen(port, () => console.log(`Server running at port ` + port));
