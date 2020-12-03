const config =  require("./src/config/config");
const express = require("express");
const bodyParser= require("body-parser");
const createError = require("http-errors");
const cors = require("cors");
const newsRoutes  = require("./src/routes/news");

const app = express();

// Set up a whitelist and check against it:
app.use(cors(config.whitelistUrls));

app.use(bodyParser.json({ limit: "50mb" }));

app.use("/news", newsRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "Requested resourse is not found!!!."));
});

app.listen(config.port, () => {
  console.log(`App running on port ${config.port}.`);
});
