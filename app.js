const express = require("express");
const app = express();
const apiRouter = require("./routers/api-router");
const { handle404s, handlePSQLErrors } = require("./controllers/errorHandling");

app.use(express.json());

app.use("/api", apiRouter);

app.use("*", handle404s);
app.use(handlePSQLErrors);

module.exports = app;