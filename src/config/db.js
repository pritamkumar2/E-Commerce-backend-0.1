const mongoose = require("mongoose");

const mongoDbUrl =
  "mongodb+srv://amber:amber@cluster0.evciczt.mongodb.net/ecom?retryWrites=true&w=majority";
const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
