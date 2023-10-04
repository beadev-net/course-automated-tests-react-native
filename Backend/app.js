require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const Exception = require("./exceptions/Exception");

// Configs
const routes = require("./configs/routes");

// Setup
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof Exception) {
    return res.status(err.getHttpStatusCode()).send({
      code: err.getInternalCode(),
      message: err.getErrorMessage(),
    });
  }

  res.sendStatus(500);
  next(err);
});

module.exports = app;
