const express = require("express");
const dotenv = require("dotenv").config();
const port = 5000;
const {errorHandler} = require("./middleware/errorMiddleware")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/goals', require('./routes/apiRoutes'))
app.use(errorHandler);

app.listen(port, () => {
  console.log("server started");
});
