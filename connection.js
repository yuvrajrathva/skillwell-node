const mongoose = require("mongoose");

async function connectMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected to DB"))
    .catch((err) => {
      throw err;
    });
}

module.exports = {
  connectMongoDB,
};
