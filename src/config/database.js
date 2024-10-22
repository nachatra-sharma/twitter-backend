const mongoose = require("mongoose");

async function connectToDB(url) {
  try {
    await mongoose.connect(url + "twitter");
    console.log("connected with database successfully");
  } catch (error) {
    console.log("something went wrong while connecting with database", error);
  }
}

module.exports = connectToDB;
