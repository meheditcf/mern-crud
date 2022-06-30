const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(console.log("Connected to DB"));
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
